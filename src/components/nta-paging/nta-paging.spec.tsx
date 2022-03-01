import { newSpecPage } from '@stencil/core/testing';
import { NtaPaging } from './nta-paging';

describe('nta-paging', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NtaPaging],
      html: `<nta-paging></nta-paging>`,
    });
    expect(page.root).toEqualHtml(`
      <nta-paging>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nta-paging>
    `);
  });
});
