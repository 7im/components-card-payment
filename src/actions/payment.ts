export function paymentError(bool: boolean) {
    return {
        type: 'PAYMENT_ERROR',
        error: !!bool
    };
}
export function paymentIsAuthorising(bool: boolean) {
    return {
        type: 'PAYMENT_AUTHORISING',
        isAuthorising: !!bool
    };
}
export function paymentAuthorised(links: any[]) {
    return {
        type: 'PAYMENT_AUTHORISED',
        links
    };
}

export function paymentAuthorise() {
    // { reference, merchant, amount }
    const endpoint = 'https://try.access.worldpay.com/payments/authorizations';
    return dispatch => {
        dispatch(paymentIsAuthorising(true));

        fetch(endpoint)
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                dispatch(paymentIsAuthorising(false));
                return res;
            })
            .then(res => res.json)
            .then(res => {
                // TODO: handle data transformation
                return res;
            })
            .catch(() => dispatch(paymentError(true)));
    }
}