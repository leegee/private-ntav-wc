import { newE2EPage } from '@stencil/core/testing';

describe('nta-add-upload-video', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nta-add-upload-video></nta-add-upload-video>');

    const element = await page.find('nta-add-upload-video');
    expect(element).toHaveClass('hydrated');
  });
});
