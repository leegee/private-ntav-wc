import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'nta-video',
  styleUrl: 'nta-video.css',
  shadow: true,
})
export class NtaVideo implements ComponentInterface {
  @Prop() video;

  render() {
    const video_url = "//youtu.be/" + this.video.id;
    return (
      <Host>
        <h1 class='title'>{this.video.title}</h1>

        <a href={video_url} target="_blank">
          <img src={this.video.thumbnail} />
        </a>

        <div>
          <span class='date'>
            Uploaded {new Date(this.video.publishedAt).toLocaleDateString()}
          </span>
          <a class='link' href={video_url} target="_blank">
            {window.location.protocol + video_url}
          </a>
        </div>

        <p class='description'>{this.video.description}</p>
      </Host>
    );
  }

}
