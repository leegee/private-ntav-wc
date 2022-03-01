const mainQueryController = new AbortController();
const predictiveQueryController = new AbortController();

import {
  Component,
  ComponentInterface,
  Host,
  h,
  Listen,
  Prop,
  State,
  Watch,
} from "@stencil/core";
import { ISearchResponse } from "./searchResponse.interface";
import { IPredictiveTextResponse } from "./predictiveTextResponse.interface";

// @ts-ignore-next
const ServiceRoot = window.ServiceRoot || "";

const MAX_CACHE_AGE = 3600;

@Component({
  tag: "nta-search",
  styleUrl: "nta-search.css",
  shadow: true,
})
export class NtaSearch implements ComponentInterface {
  _debounceMainQueryTimer = null;
  _debouncePredictiveQueryTimer = null;
  _debounceCleanCacheTimer = null;

  @Prop() clickAction: any;

  @State() resultsResponse: ISearchResponse;
  @State() errorText: string;
  @State() showSpinner = false;
  @State() pageNumber = 1;
  @State() results: ISearchResponse;
  @State() fetchingMainQuery = false;
  @State() fetchingPredictiveQuery = false;
  @State() q: string;
  @State() predictiveTextTerm: string;
  @State() suggestions: Array<string> = [];

  @Watch("q")
  qWatchHandler() {
    this.doSearch();
  }

  @Watch("predictiveTextTerm")
  predictiveTextTermWatchHandler() {
    this.doPredictiveText();
  }

  @Watch("pageNumber")
  pageNumberWatchHandler() {
    this.doSearch();
  }

  @Listen("searchSubmit", { target: "window" })
  searchSubmitHandler(e: CustomEvent) {
    this.pageNumber = e.detail.pageNumber || 1;
    this.q = e.detail.q;
  }

  @Listen("searchTextChanged", { target: "window" })
  async searchTextChangedHandler(e: CustomEvent) {
    this.predictiveTextTerm = e.detail;
  }

  @Listen("pageChanged", { target: "window" })
  pageChangedHandler(e: CustomEvent) {
    this.pageNumber = e.detail;
  }

  componentWillLoad() {
    if (window.location.search.length > 1) {
      this.q = decodeURIComponent(window.location.search.substr(1));
    }
  }

  errorReceived(error: string) {
    console.warn("Received errorReceived event: ", error);
    this.resultsResponse = null;
    this.errorText = error;
  }

  resultsReceived(resultsResponse: ISearchResponse) {
    this.resultsResponse = resultsResponse;
  }

  resultsRequestedHandler() {
    this.errorText = null;
  }

  doSearch(ms = 500) {
    clearTimeout(this._debounceMainQueryTimer);
    this._debounceMainQueryTimer = setTimeout(() => {
      this._debounceMainQueryTimer = null;
      return this._doSearch();
    }, ms);
  }

  doPredictiveText(ms = 200) {
    clearTimeout(this._debouncePredictiveQueryTimer);
    this._debouncePredictiveQueryTimer = setTimeout(() => {
      this._debouncePredictiveQueryTimer = null;
      this._doPredictiveText();
    }, ms);
  }

  async getCachedJson(url: string) {
    const cached = localStorage.getItem(url);
    return cached ? JSON.parse(cached) : null;
  }

  async _doPredictiveText() {
    const term = this.predictiveTextTerm.replace(/\s+/, " ").trim();
    const url =
      ServiceRoot + "/cgi-bin/keywords.pl?q=" + encodeURIComponent(term);
    let json: IPredictiveTextResponse;
    let usedCache = false;

    if (term.length < 3) {
      return;
    }

    json = await this.getCachedJson(url);
    usedCache = json !== null;

    if (!json) {
      if (this.fetchingPredictiveQuery) {
        console.log("Aborting PredictiveQuery request");
        predictiveQueryController.abort();
        this.fetchingPredictiveQuery = false;
      }

      this.fetchingPredictiveQuery = true;
      console.log("Making PredictiveQuery request");

      try {
        const response = await fetch(url, {
          signal: mainQueryController.signal,
          // mode: 'no-cors',
        });
        json = (await response.json()) as IPredictiveTextResponse;
      } catch (error) {
      } finally {
        this.fetchingPredictiveQuery = false;
      }
    }

    if (json) {
      this.suggestions = json.results;
      if (!usedCache && Number(json.code) === 200) {
        localStorage.setItem(url, JSON.stringify(json));

        clearTimeout(this._debounceCleanCacheTimer);
        this._debounceCleanCacheTimer = setTimeout(() => {
          this._debounceCleanCacheTimer = null;
          this.cleanCache();
        }, 60000);
      }
    }
  }

  async _doSearch() {
    const q = this.q.replace(/\s+/, " ").trim();
    if (q.length > 3) {
      this.errorText = null;
      this.showSpinner = true;
      const encodedQ = encodeURIComponent(q);

      if (this.fetchingMainQuery) {
        console.log("Aborting request");
        mainQueryController.abort();
        this.fetchingMainQuery = false;
      }

      this.fetchingMainQuery = true;

      try {
        const res = await fetch(
          ServiceRoot +
            "/cgi-bin/search.pl?q=" +
            encodedQ +
            "&page=" +
            this.pageNumber,
          {
            signal: mainQueryController.signal,
            // mode: 'no-cors',
          }
        );

        this.showSpinner = false;
        this.fetchingMainQuery = false;

        const json = await res.json();

        if (json.status === "ok") {
          this.resultsReceived(json as ISearchResponse);
        } else {
          console.error(json);
          this.errorReceived(json.message);
        }
      } catch (error) {
        this.showSpinner = false;
        this.fetchingMainQuery = false;
        if (error.name === "AbortError") {
          console.log("Request aborted");
        } else {
          console.error(error);
          this.errorReceived(error.toString());
        }
      }
    }
  }

  async cleanCache() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const entry = localStorage.getItem(key);
      const json = JSON.parse(entry);
      const age = Math.abs(
        Date.now() - new Date(json.datetime.replace(/[^\dZ:]/g, " ")).getTime()
      );
      if (age > MAX_CACHE_AGE) {
        localStorage.removeItem(key);
      }
    }
  }

  render() {
    return (
      <Host>
        <nta-searchinput
          busy={this.fetchingMainQuery}
          suggestions={this.suggestions}
          value={this.q}
        >
          <span slot="search-button">
            <slot name="search-button">🔎</slot>
          </span>
          <span slot="search-placeholder">
            <slot name="search-placeholder">Search here</slot>
          </span>
        </nta-searchinput>

        <nta-spinner position="fixed" hidden={!this.showSpinner}></nta-spinner>

        <div class="error" hidden={!this.errorText}>
          There was an error communicating with the server.{" "}
          <pre>{this.errorText ? this.errorText : "UNDEFINED"}</pre>
        </div>

        <div class="flex-container">
          <nta-searchresults
            clickAction={this.clickAction}
            resultsResponse={this.resultsResponse}
          ></nta-searchresults>
        </div>
      </Host>
    );
  }
}
