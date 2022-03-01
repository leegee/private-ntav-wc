import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'nta-paging',
  styleUrl: 'nta-paging.css',
  shadow: true,
})
export class NtaPaging implements ComponentInterface {
  @Prop() current: number;
  @Prop() pages: {};

  @Event({
    eventName: 'pageChanged',
    bubbles: true,
    composed: true,
  }) pageChanged: EventEmitter;

  _pageChanged(pageNumber) {
    this.pageChanged.emit(pageNumber);
  }

  render() {
    return (Object.keys(this.pages).length === 1) ? '' : (
      <ul>
        {Object.keys(this.pages).map(
          (pageNumber) => <li
            class={Number(pageNumber) === this.current ? 'active' : ''}
            onClick={() => this._pageChanged(pageNumber)}>{pageNumber}</li>
        )}
      </ul>
    );
  }

}
