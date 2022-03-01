import { Component, Event, EventEmitter, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'nta-link',
  styleUrl: 'nta-link.css',
  shadow: true,
})
export class NtaLink {
  @Prop() path: string;

  @Event({
    eventName: 'routeChange',
    bubbles: true,
    composed: true,
  }) routeChange: EventEmitter;

  clickHandler() {
    console.log('Emit routeChange', this.path);
    this.routeChange.emit({ path: this.path });
  }

  render() {
    return (
      <Host onClick={() => this.clickHandler()}>
        <slot></slot>
      </Host>
    );
  }

}
