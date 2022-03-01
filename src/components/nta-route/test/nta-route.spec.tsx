import { newSpecPage } from '@stencil/core/testing';
import { NtaRoute } from './nta-route';

describe('nta-route', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NtaRoute],
      html: `<nta-route></nta-route>`,
    });
    expect(page.root).toEqualHtml(`
      <nta-route>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nta-route>
    `);
  });
});
