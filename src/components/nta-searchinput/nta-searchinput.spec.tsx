import { newSpecPage } from '@stencil/core/testing';
import { NtaSearchinput } from './nta-searchinput';

describe('nta-searchinput', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NtaSearchinput],
      html: `<nta-searchinput></nta-searchinput>`,
    });
    expect(page.root).toEqualHtml(`
      <nta-searchinput>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nta-searchinput>
    `);
  });
});
