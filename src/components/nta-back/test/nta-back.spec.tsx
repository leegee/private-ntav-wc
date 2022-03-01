import { newSpecPage } from '@stencil/core/testing';
import { NtaBack } from './nta-back';

describe('nta-back', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NtaBack],
      html: `<nta-back></nta-back>`,
    });
    expect(page.root).toEqualHtml(`
      <nta-back>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nta-back>
    `);
  });
});
