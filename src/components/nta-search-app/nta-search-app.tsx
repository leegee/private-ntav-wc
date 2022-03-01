import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "nta-search-app",
  styleUrl: "nta-search-app.css",
  shadow: true,
})
export class NtaSearchApp {
  @Prop() clickAction: any;

  render() {
    return (
      <Host>
        <slot name="before"></slot>
        <nta-router>
          <nta-route active path="/" exact={true}>
            <nta-search clickAction={this.clickAction}>
              <span slot="search-button">
                <slot name="search-button">🔎</slot>
              </span>
              <span slot="search-placeholder">
                <slot name="search-placeholder">Search here</slot>
              </span>
            </nta-search>
          </nta-route>
        </nta-router>
        <slot name="after"></slot>
      </Host>
    );
  }
}
