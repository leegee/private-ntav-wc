import { Component, ComponentInterface, h, State } from '@stencil/core';

// @ts-ignore-next
const ServiceRoot = window.ServiceRoot || '';

@Component({
  tag: 'nta-add-upload-video',
  styleUrl: 'nta-add-upload-video.css',
  shadow: true,
})
export class NtaAddUploadVideo implements ComponentInterface {
  videoIdEl!: HTMLInputElement;
  secretEl!: HTMLInputElement;
  @State() code: number;
  @State() status: string;
  @State() added: number | string;
  @State() serverMessage: string;
  @State() message: string;
  @State() working = false;

  async handleSubmit(e: Event) {
    e.preventDefault();

    const videoId = this.videoIdEl.value;
    const secret = this.secretEl.value;

    if (!videoId || !secret) {
      alert('Please enter a YouTube video ID and The Secret.');
      return;
    }

    this.added = null;
    this.message = 'Adding ' + videoId;

    try {
      this.working = true;
      console.log('ServiceRoot:', ServiceRoot);
      const res = await fetch(ServiceRoot + '/cgi-bin/add-update-video.pl?video=' + videoId + '&secret=' + secret, {});
      const json = await res.json();
      this.message = "I've spoken with the servers.";
      this.code = json.code;
      this.status = json.status;
      this.added = json.added;
      if (json.message) {
        this.serverMessage = json.message;
      }
      this.working = false;
    } catch (e) {
      this.working = false;
      console.error(e);
      this.message = 'There was an error communicating with the service.';
    }
  }

  render() {
    let rv = [];

    if (this.working) {
      rv.push(<p>Please wait...this can take a 60 seconds or more.</p>);
    }
    if (this.message) {
      rv.push(<p>{this.message}</p>);
    }
    if (this.added) {
      rv.push(<p>The video was added. Please refresh the page to see the effect.</p>);
    }
    if (this.code && this.code !== 200) {
      rv.push(<p>Looks like there was a problem: code <code>{this.code}: {this.message}</code></p>);
    }
    if (this.serverMessage) {
      rv.push(<p>{this.serverMessage}</p>);
    }

    rv.push(
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <code>https://www.youtube.com/watch?v=</code> or <code>https://youtu.be/</code>
        <input type='text' id='videoId' minlength={8} maxlength={20} placeholder='YouTube Video ID' required
          ref={(el) => this.videoIdEl = el as HTMLInputElement}
        />
        <input type='text' id='secret' required placeholder='Our secret'
          ref={(el) => this.secretEl = el as HTMLInputElement}
        />
        <input type='submit' value='Add/Update' />
      </form>
    );

    return rv;
  }

}
