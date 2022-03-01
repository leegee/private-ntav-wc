import { newE2EPage } from '@stencil/core/testing';

describe('nta-searchresult', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nta-searchresult></nta-searchresult>');

    const element = await page.find('nta-searchresult');
    expect(element).toHaveClass('hydrated');
  });
});
