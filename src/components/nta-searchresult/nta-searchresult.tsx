import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  Host,
  h,
  Prop,
} from "@stencil/core";

@Component({
  tag: "nta-searchresult",
  styleUrl: "nta-searchresult.css",
  shadow: true,
})
export class NtaSearchresult implements ComponentInterface {
  @Prop() id: string;
  @Prop() time: number;
  @Prop() caption: string;
  @Prop() score: number;
  @Prop() title: string;
  @Prop() publishedAt: string;
  @Prop() wp_post_id: string;
  @Prop() thumbnail: string;
  @Prop() description: string;
  @Prop() totalHits: number;
  @Prop() clickAction: any;

  render() {
    // const iframeUrl = "//www.youtube.com/embed/" + this.id + "?start=" + this.time;

    const video_url = "//youtu.be/" + this.id + "?t=" + this.time;
    const className = this.totalHits < 4 ? "big" : "";

    return (
      <Host>
        {/* <iframe src={iframeUrl} frameborder="0"></iframe> */}
        <a href={video_url} target="_blank">
          <img src={this.thumbnail} />
        </a>
        <div class={className + " text"} onClick={() => this.clickAction(this)}>
          <div class="title">{this.title}</div>
          <div class="link">{window.location.protocol + video_url}</div>
          <p class="description">{this.description}</p>
          {this.caption ? (
            <p class="caption">
              <q innerHTML={this.caption}></q>
            </p>
          ) : (
            ""
          )}
          <div class="date">
            Uploaded {new Date(this.publishedAt).toLocaleDateString()}
          </div>
          {/* </nta-link> */}
        </div>
      </Host>
    );
  }
}
