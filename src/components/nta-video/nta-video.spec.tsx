import { newSpecPage } from '@stencil/core/testing';
import { NtaVideo } from './nta-video';

describe('nta-video', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NtaVideo],
      html: `<nta-video></nta-video>`,
    });
    expect(page.root).toEqualHtml(`
      <nta-video>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nta-video>
    `);
  });
});
