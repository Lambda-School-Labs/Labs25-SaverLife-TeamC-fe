// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.

import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { goalReducer } from './goalReducer';
import { transactionReducer } from './transactionReducer';
import { budgetReducer } from './budgetReducer';
export default combineReducers({
  userReducer,
  goalReducer,
  transactionReducer,
  budgetReducer,
});
