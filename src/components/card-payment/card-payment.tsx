import { Component, Prop } from '@stencil/core';
import { Store } from '@stencil/redux';
import 'whatwg-fetch';
import { configureStore } from '../../store';

@Component({
  tag: 'card-payment',
  styleUrl: 'card-payment.scss',
  shadow: true
})
export class CardPayment {
  @Prop() reference: string;
  @Prop() merchant: string;
  @Prop() amount: number = 0;
  @Prop({ context: 'store' }) store: Store;

  componentWillLoad() {
    this.store.setStore(configureStore({}));
  }

  render() {
    return (
      <div class="card-payment">
        <payment-form
          reference={this.reference}
          merchant={this.merchant}
          amount={this.amount}
        />
      </div>
    );
  }
}
