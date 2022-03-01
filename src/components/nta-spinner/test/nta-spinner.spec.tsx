import { newSpecPage } from '@stencil/core/testing';
import { NtaSpinner } from './nta-spinner';

describe('nta-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NtaSpinner],
      html: `<nta-spinner></nta-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <nta-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nta-spinner>
    `);
  });
});
