import { Component, ComponentInterface, Element, h, State, Prop } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'nta-searchinput',
  styleUrl: 'nta-searchinput.css',
  shadow: true,
})
export class NtaSearchinput implements ComponentInterface {
  _debounceFetchTimeout = null;
  placeholderText = 'Search';

  @Element() el: HTMLElement;
  @Prop() value: string;
  @Prop() busy = false;
  @Prop() suggestions: Array<string> = [];

  @State() q: string;

  @Event({
    eventName: 'searchSubmit',
    bubbles: true,
    composed: true,
  }) searchSubmit: EventEmitter;

  @Event({
    eventName: 'searchTextChanged',
    bubbles: true,
    composed: true,
  }) searchTextChanged: EventEmitter;

  componentWillLoad() {
    if (this.value) {
      this.q = this.value;
    }

    const nodes = Array.from(this.el.querySelectorAll('slot'));

    nodes.forEach(node => {
      node.assignedNodes().forEach(assignedNode => {
        // @ts-ignore-next
        if (assignedNode.getAttribute('slot') === 'search-placeholder') {
          this.placeholderText = assignedNode.textContent;
        }
      });
    });
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    this.searchSubmit.emit({ pageNumber: 1, q: this.q });
  }

  handleChange(e) {
    this.q = e.target.value;
    this.searchTextChanged.emit(this.q);

    let submit = -1;

    for (var i = 0; i < this.suggestions.length; i++) {
      if (this.suggestions[i] === this.q) {
        submit = i;
        break;
      }
    }

    if (submit > -1) {
      this.searchSubmit.emit({ pageNumber: 1, q: this.q });
    } else {
      this.searchTextChanged.emit(this.q);
    }
  }

  render() {
    const moreThanOneSuggestion = !(this.suggestions && this.suggestions.length === 1 && this.q && this.q.length && this.suggestions[0].toLowerCase() === this.q.toLowerCase());

    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input x-disabled={this.busy} class={moreThanOneSuggestion ? '' : 'suggested'}
          placeholder={this.placeholderText} type="search" spellcheck="true" minlength="3"
          list="suggestions"
          required={true}
          value={this.q} onInput={(e) => this.handleChange(e)}
        />

        <datalist id="suggestions">
          {(!this.busy) && moreThanOneSuggestion && this.suggestions.map(_ => (
            <option value={_}></option>
          ))}
        </datalist>

        <button type='submit' x-disabled={this.busy}>
          <slot name='search-button'>🔎</slot>
        </button>
      </form>
    );
  }

}
