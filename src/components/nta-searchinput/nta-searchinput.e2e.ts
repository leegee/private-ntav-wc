import { newE2EPage } from '@stencil/core/testing';

describe('nta-searchinput', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nta-searchinput></nta-searchinput>');

    const element = await page.find('nta-searchinput');
    expect(element).toHaveClass('hydrated');
  });
});
