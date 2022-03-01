import { newSpecPage } from '@stencil/core/testing';
import { NtaSearchresults } from './nta-searchresults';

describe('nta-searchresults', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NtaSearchresults],
      html: `<nta-searchresults></nta-searchresults>`,
    });
    expect(page.root).toEqualHtml(`
      <nta-searchresults>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nta-searchresults>
    `);
  });
});
