import { newE2EPage } from '@stencil/core/testing';

describe('nta-paging', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nta-paging></nta-paging>');

    const element = await page.find('nta-paging');
    expect(element).toHaveClass('hydrated');
  });
});
