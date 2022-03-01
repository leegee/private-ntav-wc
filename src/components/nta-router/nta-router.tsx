import { Component, Host, h, Listen, State } from '@stencil/core';

const LOG_CSS = 'background:navy;border-radius:3pt;padding:3pt';

@Component({
  tag: 'nta-router',
  shadow: true,
})
export class NtaRouter {
  static routes = [];

  @State() currentRouteIndex: number;
  initialRoute: string;

  @Listen("routeAdd", { target: "window" })
  routeAddedHandler(e: CustomEvent) {
    const routeObj = e.detail;
    console.info('%cnta-router.routeAdd: added', LOG_CSS, routeObj.path);

    if (routeObj.active) {
      NtaRouter.routes.forEach((route) => {
        route.routeObj.active = false;
      });
    }

    const pathPattern = routeObj.path;
    let pathReString = pathPattern.replace(/:([^\\/]+)/g, '(?<$1>[^\\/]+)');
    if (routeObj.exact) {
      pathReString = '^' + pathReString + '$';
    }
    const pathRe = new RegExp(pathReString);

    NtaRouter.routes.push({
      routeObj,
      re: pathRe,
    });

    if (routeObj.active) {
      this.currentRouteIndex = NtaRouter.routes.length - 1;
    }

    if (this.initialRoute) {
      console.log(LOG_CSS, 'Change route for initial route');
      this.changeRoute(this.initialRoute);
    }
  }


  @Listen("routeChange", { target: "window" })
  routeChangeHandler(e: CustomEvent) {
    console.log('%cnta-router.routeChange: got path %s', LOG_CSS, e.detail.path);
    const path = e.detail.path;
    window.location.hash = '#' + path;
  }

  @Listen('hashchange', { target: 'window' })
  locationWatcher() {
    // history.pushState({}, '', path);
    this.changeRoute(window.location.hash.substring(1));
  }

  changeRoute(path: string) {
    const pathParams = {};
    let matched, newRouteIndex;

    for (newRouteIndex = 0; newRouteIndex < NtaRouter.routes.length; newRouteIndex++) {
      matched = NtaRouter.routes[newRouteIndex].re.exec(path);
      if (matched) {
        if (matched.groups) {
          for (let [key, value] of Object.entries(matched.groups)) {
            pathParams[key] = decodeURIComponent(value as string);
          }
        }
        console.log('nta-router.routeChange: found route %d with params', newRouteIndex, pathParams);
        break;
      }
    }

    if (!matched) {
      if (!this.initialRoute) {
        console.error('nta-router.routeChange: %s did not match any routes', path);
      }
      return;
    }

    if (typeof this.currentRouteIndex !== 'undefined') {
      console.log('nta-router.routeChange: deactivate route', this.currentRouteIndex);
      NtaRouter.routes[this.currentRouteIndex].routeObj.active = false;
    }

    this.currentRouteIndex = newRouteIndex;

    console.info('%cnta-router.routeChange: setting new current route %s to active', LOG_CSS, NtaRouter.routes[this.currentRouteIndex].routeObj.path);
    NtaRouter.routes[this.currentRouteIndex].routeObj.activate(pathParams);
  }


  componentWillLoad() {
    const path = window.location.hash ? window.location.hash.substring(1) : null;
    if (path) {
      console.log('%cnta-router.componentWillLoad: Inital route from URI', LOG_CSS, path);
      this.initialRoute = path;
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
