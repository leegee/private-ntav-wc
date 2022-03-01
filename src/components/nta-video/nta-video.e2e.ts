import { newE2EPage } from '@stencil/core/testing';

describe('nta-video', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nta-video></nta-video>');

    const element = await page.find('nta-video');
    expect(element).toHaveClass('hydrated');
  });
});
