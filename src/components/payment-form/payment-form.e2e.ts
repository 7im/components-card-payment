import { newE2EPage } from '@stencil/core/testing';

describe('card-payment', () => {
  it('renders payment-form', async () => {
    const page = await newE2EPage();

    await page.setContent('<card-payment></card-payment>');
    
    const element = await page.find('card-payment >>> payment-form');
    expect(element).toHaveClass('hydrated');
  });

  it('render display amount property value in the pay button', async () => {
    const page = await newE2EPage();

    await page.setContent('<card-payment></card-payment>');
    const component = await page.find('card-payment >>> payment-form');

    component.setProperty('amount', 20);
    await page.waitForChanges();

    const button = await page.find('card-payment >>> payment-form button');
    expect(button.textContent).toEqual('Pay £20');
  });
});
