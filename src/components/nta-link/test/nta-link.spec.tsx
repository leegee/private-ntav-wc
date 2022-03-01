import { newSpecPage } from '@stencil/core/testing';
import { NtaLink } from './nta-link';

describe('nta-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NtaLink],
      html: `<nta-link></nta-link>`,
    });
    expect(page.root).toEqualHtml(`
      <nta-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nta-link>
    `);
  });
});
