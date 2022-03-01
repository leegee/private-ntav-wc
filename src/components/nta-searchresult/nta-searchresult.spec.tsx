import { newSpecPage } from '@stencil/core/testing';
import { NtaSearchresult } from './nta-searchresult';

describe('nta-searchresult', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NtaSearchresult],
      html: `<nta-searchresult></nta-searchresult>`,
    });
    expect(page.root).toEqualHtml(`
      <nta-searchresult>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nta-searchresult>
    `);
  });
});
