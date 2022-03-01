import { newSpecPage } from '@stencil/core/testing';
import { NtaSearchApp } from './nta-search-app';

describe('nta-search-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NtaSearchApp],
      html: `<nta-search-app></nta-search-app>`,
    });
    expect(page.root).toEqualHtml(`
      <nta-search-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nta-search-app>
    `);
  });
});
