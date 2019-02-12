import { Prop, Component, State } from "@stencil/core";
import { Store, Action } from "@stencil/redux";

import { paymentAuthorise } from '../../actions/payment';

@Component({
    tag: 'payment-form'
})
export class PaymentForm {
    @Prop() reference: string;
    @Prop() merchant: string;
    @Prop() amount: number;
    @Prop({ context: 'store' }) store: Store;

    @State() name: string;
    @State() cardNumber: string;
    @State() expiryDate: string;

    error: boolean;
    isAuthorising: boolean;
    links: any[];

    paymentAuthorise: Action;
    
    componentWillLoad() {
        this.store.mapStateToProps(this, ({
            paymentError: error,
            paymentIsAuthorising: isAuthorising,
            paymentAuthorised: links
        }) => ({
            error,
            isAuthorising,
            links
        }));
    
        this.store.mapDispatchToProps(this, {
            paymentAuthorise
        });
    }

    handleInput(e, stateKey: string) {
        const value = e.target.value;
        this[stateKey] = value;
    }

    render() {
        const {
            name, cardNumber, expiryDate,
            reference, merchant, amount,
            error, isAuthorising, paymentAuthorise
        } = this;
        return (  
            <form>
                <div class="form-group">
                    <label htmlFor="input-name">Card Holder Name</label>
                    <input type="text" class="form-control" id="input-name"
                        placeholder="Enter your name as shown on the card" value={name} onKeyUp={e => this.handleInput(e, 'name')} />
                </div>
                <div class="form-group">
                    <label htmlFor="input-card">Card Number</label>
                    <input type="text" class="form-control" id="input-card"
                        placeholder="Enter your card number" value={cardNumber} onKeyUp={e => this.handleInput(e, 'cardNumber')} />
                </div>
                <div class="form-group">
                    <label htmlFor="input-card-expiry">Card Expiry Date</label>
                    <input type="text" class="form-control" id="input-card-expiry"
                        placeholder="MM/YYYY" value={expiryDate} onKeyUp={e => this.handleInput(e, 'expiryDate')} />
                </div>

                <button
                    type="button"
                    class="btn btn-primary btn-block"
                    disabled={isAuthorising}
                    onClick={() => paymentAuthorise({reference, merchant, amount}, {name, cardNumber, expiryDate})}
                    >Pay £{amount}</button>
                {error && <div class="alert alert-danger" role="alert">
                    Card cannot be authorised.
                </div>}
            </form>
        );
    }
};