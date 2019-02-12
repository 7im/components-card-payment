import { newE2EPage } from '@stencil/core/testing';

describe('card-payment', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<card-payment></card-payment>');
    const element = await page.find('card-payment');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<card-payment></card-payment>');
    
    const element = await page.find('card-payment >>> div');
    expect(element).toHaveClass('card-payment');
  });
});
