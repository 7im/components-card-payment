import { paymentError, paymentIsAuthorising, paymentAuthorised } from './payment';

describe('paymentError reducer', () => {
  it('returns default state of false', () => {
    expect(paymentError(undefined, {})).toEqual(false);
  });
  it('inject initial state of true', () => {
    expect(paymentError(true, {})).toEqual(true);
  });
  it('toggle state with action "PAYMENT_ERROR"', () => {
    expect(paymentError(undefined, {
        type: 'PAYMENT_ERROR', error: true
    })).toEqual(true);
    
    expect(paymentError(undefined, {
      type: 'PAYMENT_ERROR', error: false
    })).toEqual(false);
  });
});

describe('paymentIsAuthorising reducer', () => {
  it('returns default state of false', () => {
    expect(paymentIsAuthorising(undefined, {})).toEqual(false);
  });
  it('inject initial state of true', () => {
    expect(paymentIsAuthorising(true, {})).toEqual(true);
  });
  it('toggle state with action "PAYMENT_AUTHORISING"', () => {
    expect(paymentIsAuthorising(undefined, {
        type: 'PAYMENT_AUTHORISING', isAuthorising: true
    })).toEqual(true);
    
    expect(paymentIsAuthorising(undefined, {
      type: 'PAYMENT_AUTHORISING', isAuthorising: false
    })).toEqual(false);
  });
});

describe('paymentAuthorised reducer', () => {
  it('returns default state of false', () => {
    expect(paymentAuthorised(undefined, {})).toEqual([]);
  });
  it('inject initial state of true', () => {
    expect(paymentAuthorised([123], {})).toEqual([123]);
  });
  it('toggle state with action "PAYMENT_AUTHORISED"', () => {
    expect(paymentAuthorised(undefined, {
        type: 'PAYMENT_AUTHORISED', links: [234]
    })).toEqual([234]);
    
    expect(paymentAuthorised(undefined, {
      type: 'PAYMENT_AUTHORISED', links: [345]
    })).toEqual([345]);
  });
});
