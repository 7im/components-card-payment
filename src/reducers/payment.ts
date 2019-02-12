export function paymentError(state = false, action) {
    switch (action.type) {
        case 'PAYMENT_ERROR':
            return action.error;
        default:
            return state;
    };
}
export function paymentIsAuthorising(state = false, action) {
    switch (action.type) {
        case 'PAYMENT_AUTHORISING':
            return action.isAuthorising;
        default:
            return state;
    };
}
export function paymentAuthorised(state = [], action) {
    switch (action.type) {
        case 'PAYMENT_AUTHORISED':
            return action.links;
        default:
            return state;
    };
}