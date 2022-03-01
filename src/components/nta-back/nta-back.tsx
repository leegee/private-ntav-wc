import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nta-back',
  styleUrl: 'nta-back.css',
  shadow: true,
})
export class NtaBack {

  back() {
    history.go(-1);
  }

  render() {
    return (
      <Host onClick={() => this.back()}>
        <slot></slot>
      </Host>
    );
  }

}
