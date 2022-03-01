import { newE2EPage } from '@stencil/core/testing';

describe('nta-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nta-spinner></nta-spinner>');

    const element = await page.find('nta-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
