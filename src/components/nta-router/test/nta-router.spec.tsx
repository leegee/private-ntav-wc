import { newSpecPage } from '@stencil/core/testing';
import { NtaRouter } from './nta-router';

describe('nta-router', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NtaRouter],
      html: `<nta-router></nta-router>`,
    });
    expect(page.root).toEqualHtml(`
      <nta-router>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nta-router>
    `);
  });
});
