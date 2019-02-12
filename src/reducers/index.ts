import { paymentError, paymentIsAuthorising, paymentAuthorised } from './payment';

import { combineReducers } from 'redux';

const rootReducer = (combineReducers as any)({
  paymentError,
  paymentIsAuthorising,
  paymentAuthorised
});
  
export default rootReducer;