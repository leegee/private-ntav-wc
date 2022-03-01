import { newE2EPage } from '@stencil/core/testing';

describe('nta-searchresults', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nta-searchresults></nta-searchresults>');

    const element = await page.find('nta-searchresults');
    expect(element).toHaveClass('hydrated');
  });
});
