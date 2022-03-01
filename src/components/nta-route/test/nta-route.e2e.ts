import { newE2EPage } from '@stencil/core/testing';

describe('nta-route', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nta-route></nta-route>');

    const element = await page.find('nta-route');
    expect(element).toHaveClass('hydrated');
  });
});
