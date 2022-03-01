import { newSpecPage } from '@stencil/core/testing';
import { NtaAddUploadVideo } from './nta-add-upload-video';

describe('nta-add-upload-video', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NtaAddUploadVideo],
      html: `<nta-add-upload-video></nta-add-upload-video>`,
    });
    expect(page.root).toEqualHtml(`
      <nta-add-upload-video>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nta-add-upload-video>
    `);
  });
});
