import { newSpecPage } from '@stencil/core/testing';
import { NtaSearch } from './nta-search';

describe('nta-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NtaSearch],
      html: `<nta-search></nta-search>`,
    });
    expect(page.root).toEqualHtml(`
      <nta-search>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nta-search>
    `);
  });
});
