import { newE2EPage } from '@stencil/core/testing';

describe('nta-back', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nta-back></nta-back>');

    const element = await page.find('nta-back');
    expect(element).toHaveClass('hydrated');
  });
});
