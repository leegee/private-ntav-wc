/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ISearchResponse } from "./components/nta-search/searchResponse.interface";
export namespace Components {
    interface NtaAddUploadVideo {
    }
    interface NtaBack {
    }
    interface NtaLink {
        "path": string;
    }
    interface NtaPaging {
        "current": number;
        "pages": {};
    }
    interface NtaRoute {
        "active": boolean;
        "exact": boolean;
        "path": string;
    }
    interface NtaRouter {
    }
    interface NtaSearch {
        "clickAction": any;
    }
    interface NtaSearchApp {
        "clickAction": any;
    }
    interface NtaSearchinput {
        "busy": boolean;
        "suggestions": Array<string>;
        "value": string;
    }
    interface NtaSearchresult {
        "caption": string;
        "clickAction": any;
        "description": string;
        "id": string;
        "publishedAt": string;
        "score": number;
        "thumbnail": string;
        "time": number;
        "title": string;
        "totalHits": number;
        "wp_post_id": string;
    }
    interface NtaSearchresults {
        "clickAction": any;
        "resultsResponse": ISearchResponse;
    }
    interface NtaSpinner {
        "hidden": boolean;
        "position": string;
    }
    interface NtaVideo {
        "video": any;
    }
}
declare global {
    interface HTMLNtaAddUploadVideoElement extends Components.NtaAddUploadVideo, HTMLStencilElement {
    }
    var HTMLNtaAddUploadVideoElement: {
        prototype: HTMLNtaAddUploadVideoElement;
        new (): HTMLNtaAddUploadVideoElement;
    };
    interface HTMLNtaBackElement extends Components.NtaBack, HTMLStencilElement {
    }
    var HTMLNtaBackElement: {
        prototype: HTMLNtaBackElement;
        new (): HTMLNtaBackElement;
    };
    interface HTMLNtaLinkElement extends Components.NtaLink, HTMLStencilElement {
    }
    var HTMLNtaLinkElement: {
        prototype: HTMLNtaLinkElement;
        new (): HTMLNtaLinkElement;
    };
    interface HTMLNtaPagingElement extends Components.NtaPaging, HTMLStencilElement {
    }
    var HTMLNtaPagingElement: {
        prototype: HTMLNtaPagingElement;
        new (): HTMLNtaPagingElement;
    };
    interface HTMLNtaRouteElement extends Components.NtaRoute, HTMLStencilElement {
    }
    var HTMLNtaRouteElement: {
        prototype: HTMLNtaRouteElement;
        new (): HTMLNtaRouteElement;
    };
    interface HTMLNtaRouterElement extends Components.NtaRouter, HTMLStencilElement {
    }
    var HTMLNtaRouterElement: {
        prototype: HTMLNtaRouterElement;
        new (): HTMLNtaRouterElement;
    };
    interface HTMLNtaSearchElement extends Components.NtaSearch, HTMLStencilElement {
    }
    var HTMLNtaSearchElement: {
        prototype: HTMLNtaSearchElement;
        new (): HTMLNtaSearchElement;
    };
    interface HTMLNtaSearchAppElement extends Components.NtaSearchApp, HTMLStencilElement {
    }
    var HTMLNtaSearchAppElement: {
        prototype: HTMLNtaSearchAppElement;
        new (): HTMLNtaSearchAppElement;
    };
    interface HTMLNtaSearchinputElement extends Components.NtaSearchinput, HTMLStencilElement {
    }
    var HTMLNtaSearchinputElement: {
        prototype: HTMLNtaSearchinputElement;
        new (): HTMLNtaSearchinputElement;
    };
    interface HTMLNtaSearchresultElement extends Components.NtaSearchresult, HTMLStencilElement {
    }
    var HTMLNtaSearchresultElement: {
        prototype: HTMLNtaSearchresultElement;
        new (): HTMLNtaSearchresultElement;
    };
    interface HTMLNtaSearchresultsElement extends Components.NtaSearchresults, HTMLStencilElement {
    }
    var HTMLNtaSearchresultsElement: {
        prototype: HTMLNtaSearchresultsElement;
        new (): HTMLNtaSearchresultsElement;
    };
    interface HTMLNtaSpinnerElement extends Components.NtaSpinner, HTMLStencilElement {
    }
    var HTMLNtaSpinnerElement: {
        prototype: HTMLNtaSpinnerElement;
        new (): HTMLNtaSpinnerElement;
    };
    interface HTMLNtaVideoElement extends Components.NtaVideo, HTMLStencilElement {
    }
    var HTMLNtaVideoElement: {
        prototype: HTMLNtaVideoElement;
        new (): HTMLNtaVideoElement;
    };
    interface HTMLElementTagNameMap {
        "nta-add-upload-video": HTMLNtaAddUploadVideoElement;
        "nta-back": HTMLNtaBackElement;
        "nta-link": HTMLNtaLinkElement;
        "nta-paging": HTMLNtaPagingElement;
        "nta-route": HTMLNtaRouteElement;
        "nta-router": HTMLNtaRouterElement;
        "nta-search": HTMLNtaSearchElement;
        "nta-search-app": HTMLNtaSearchAppElement;
        "nta-searchinput": HTMLNtaSearchinputElement;
        "nta-searchresult": HTMLNtaSearchresultElement;
        "nta-searchresults": HTMLNtaSearchresultsElement;
        "nta-spinner": HTMLNtaSpinnerElement;
        "nta-video": HTMLNtaVideoElement;
    }
}
declare namespace LocalJSX {
    interface NtaAddUploadVideo {
    }
    interface NtaBack {
    }
    interface NtaLink {
        "onRouteChange"?: (event: CustomEvent<any>) => void;
        "path"?: string;
    }
    interface NtaPaging {
        "current"?: number;
        "onPageChanged"?: (event: CustomEvent<any>) => void;
        "pages"?: {};
    }
    interface NtaRoute {
        "active"?: boolean;
        "exact"?: boolean;
        "onRouteAdd"?: (event: CustomEvent<any>) => void;
        "path"?: string;
    }
    interface NtaRouter {
    }
    interface NtaSearch {
        "clickAction"?: any;
    }
    interface NtaSearchApp {
        "clickAction"?: any;
    }
    interface NtaSearchinput {
        "busy"?: boolean;
        "onSearchSubmit"?: (event: CustomEvent<any>) => void;
        "onSearchTextChanged"?: (event: CustomEvent<any>) => void;
        "suggestions"?: Array<string>;
        "value"?: string;
    }
    interface NtaSearchresult {
        "caption"?: string;
        "clickAction"?: any;
        "description"?: string;
        "id"?: string;
        "publishedAt"?: string;
        "score"?: number;
        "thumbnail"?: string;
        "time"?: number;
        "title"?: string;
        "totalHits"?: number;
        "wp_post_id"?: string;
    }
    interface NtaSearchresults {
        "clickAction"?: any;
        "resultsResponse"?: ISearchResponse;
    }
    interface NtaSpinner {
        "hidden"?: boolean;
        "position"?: string;
    }
    interface NtaVideo {
        "video"?: any;
    }
    interface IntrinsicElements {
        "nta-add-upload-video": NtaAddUploadVideo;
        "nta-back": NtaBack;
        "nta-link": NtaLink;
        "nta-paging": NtaPaging;
        "nta-route": NtaRoute;
        "nta-router": NtaRouter;
        "nta-search": NtaSearch;
        "nta-search-app": NtaSearchApp;
        "nta-searchinput": NtaSearchinput;
        "nta-searchresult": NtaSearchresult;
        "nta-searchresults": NtaSearchresults;
        "nta-spinner": NtaSpinner;
        "nta-video": NtaVideo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "nta-add-upload-video": LocalJSX.NtaAddUploadVideo & JSXBase.HTMLAttributes<HTMLNtaAddUploadVideoElement>;
            "nta-back": LocalJSX.NtaBack & JSXBase.HTMLAttributes<HTMLNtaBackElement>;
            "nta-link": LocalJSX.NtaLink & JSXBase.HTMLAttributes<HTMLNtaLinkElement>;
            "nta-paging": LocalJSX.NtaPaging & JSXBase.HTMLAttributes<HTMLNtaPagingElement>;
            "nta-route": LocalJSX.NtaRoute & JSXBase.HTMLAttributes<HTMLNtaRouteElement>;
            "nta-router": LocalJSX.NtaRouter & JSXBase.HTMLAttributes<HTMLNtaRouterElement>;
            "nta-search": LocalJSX.NtaSearch & JSXBase.HTMLAttributes<HTMLNtaSearchElement>;
            "nta-search-app": LocalJSX.NtaSearchApp & JSXBase.HTMLAttributes<HTMLNtaSearchAppElement>;
            "nta-searchinput": LocalJSX.NtaSearchinput & JSXBase.HTMLAttributes<HTMLNtaSearchinputElement>;
            "nta-searchresult": LocalJSX.NtaSearchresult & JSXBase.HTMLAttributes<HTMLNtaSearchresultElement>;
            "nta-searchresults": LocalJSX.NtaSearchresults & JSXBase.HTMLAttributes<HTMLNtaSearchresultsElement>;
            "nta-spinner": LocalJSX.NtaSpinner & JSXBase.HTMLAttributes<HTMLNtaSpinnerElement>;
            "nta-video": LocalJSX.NtaVideo & JSXBase.HTMLAttributes<HTMLNtaVideoElement>;
        }
    }
}
