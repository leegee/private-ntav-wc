import { newE2EPage } from '@stencil/core/testing';

describe('nta-search-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nta-search-app></nta-search-app>');

    const element = await page.find('nta-search-app');
    expect(element).toHaveClass('hydrated');
  });
});
