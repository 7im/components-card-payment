import { paymentError, paymentIsAuthorising, paymentAuthorised } from './payment';

describe('paymentError action creator', () => {
  it('return action with type and error value', () => {
    expect(paymentError(true)).toEqual({
      type: 'PAYMENT_ERROR',
      error: true
    });
  });
  
  it('return action with falsy value', () => {
    expect(paymentError(false)).toEqual({
      type: 'PAYMENT_ERROR',
      error: false
    });
    expect(paymentError(undefined)).toEqual({
      type: 'PAYMENT_ERROR',
      error: false
    });
    expect(paymentError(null)).toEqual({
      type: 'PAYMENT_ERROR',
      error: false
    });
  });
});

describe('paymentIsAuthorising action creator', () => {
  it('return action with type and isAuthorising value', () => {
    expect(paymentIsAuthorising(true)).toEqual({
      type: 'PAYMENT_AUTHORISING',
      isAuthorising: true
    });
  });
  
  it('return action with falsy value', () => {
    expect(paymentIsAuthorising(false)).toEqual({
      type: 'PAYMENT_AUTHORISING',
      isAuthorising: false
    });
    expect(paymentIsAuthorising(undefined)).toEqual({
      type: 'PAYMENT_AUTHORISING',
      isAuthorising: false
    });
    expect(paymentIsAuthorising(null)).toEqual({
      type: 'PAYMENT_AUTHORISING',
      isAuthorising: false
    });
  });
});

describe('paymentAuthorised action creator', () => {
  it('return action with type and links value', () => {
    expect(paymentAuthorised([123])).toEqual({
      type: 'PAYMENT_AUTHORISED',
      links: [123]
    });
    expect(paymentAuthorised([])).toEqual({
      type: 'PAYMENT_AUTHORISED',
      links: []
    });
  });
  
  it('return action with falsy value', () => {
    expect(paymentAuthorised(undefined)).toEqual({
      type: 'PAYMENT_AUTHORISED',
      links: undefined
    });
    expect(paymentAuthorised(null)).toEqual({
      type: 'PAYMENT_AUTHORISED',
      links: null
    });
  });
});
