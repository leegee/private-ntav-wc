import { newE2EPage } from '@stencil/core/testing';

describe('nta-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nta-search></nta-search>');

    const element = await page.find('nta-search');
    expect(element).toHaveClass('hydrated');
  });
});
