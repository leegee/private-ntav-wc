import { Component, Element, Event, EventEmitter, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'nta-route',
  styleUrl: 'nta-route.css',
  shadow: true,
})
export class NtaRoute {
  @Element() el: HTMLElement;

  @Prop({ mutable: false, reflect: true }) active: boolean;
  @Prop() path: string;
  @Prop() exact = false;

  @Event({
    eventName: 'routeAdd',
    bubbles: true,
    composed: true,
  }) routeAdd: EventEmitter;

  componentWillLoad() {
    this.routeAdd.emit(this);
  }

  render() {
    return (
      <Host>
        {this.active ? (<slot></slot>) : ''}
      </Host>
    );
  }

  activate(pathParams) {
    console.log('nta-route.activate: params =', pathParams);
    this.active = true;

    if (pathParams) {
      const child = this.el.firstChild;
      for (let param in pathParams) {
        child[param] = pathParams[param];
        console.log('nta-route.activate: set child.%s to', param, child[param]);
      }
    }
  }
}
