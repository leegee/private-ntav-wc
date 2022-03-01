import { newE2EPage } from '@stencil/core/testing';

describe('nta-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nta-link></nta-link>');

    const element = await page.find('nta-link');
    expect(element).toHaveClass('hydrated');
  });
});
