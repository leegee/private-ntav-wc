import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'nta-spinner',
  styleUrl: 'nta-spinner.css',
  shadow: true,
})
export class NtaSpinner {
  @Prop() hidden: boolean;
  @Prop() position = 'relative';

  render() {
    return this.hidden ? (<Host></Host>) : (
      <Host>
        <div id='spinner' style={{ position: this.position }}>
          <div id='image'></div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
