import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { ISearchResponse } from '../nta-search/searchResponse.interface';

@Component({
  tag: 'nta-searchresults',
  styleUrl: 'nta-searchresults.css',
  shadow: true,
})
export class NtaSearchresults implements ComponentInterface {
  @Prop() clickAction: any;
  @Prop() resultsResponse: ISearchResponse;

  render() {
    if (this.resultsResponse == null) {
      return (<Host></Host>);
    }

    if (!this.resultsResponse.results || !this.resultsResponse.results.length) {
      return <p>No results were found matching <q>{this.resultsResponse.q}</q>.</p>
    };

    window.scroll({ top: 0, left: 0, behavior: 'smooth' });

    return (
      <Host>
        {this.resultsResponse.results.map(
          result => (<nta-searchresult clickAction={this.clickAction} {...result} totalHits={this.resultsResponse.totalHits}></nta-searchresult>)
        )}

        <nta-paging current={this.resultsResponse.currentPage} pages={this.resultsResponse.pages}></nta-paging>

        <footer>
          <p>
            Found {this.resultsResponse.totalHits} matches for <q>{this.resultsResponse.q}</q> in {this.resultsResponse.indexSize} videos
          within {this.resultsResponse.searchDuration.toFixed(4)} seconds.
        </p>
        </footer>

      </Host>
    );
  }

}
