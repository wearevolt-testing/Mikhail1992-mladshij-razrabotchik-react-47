import { combineReducers } from 'redux';
import customers from './customers';
import products from './products';
import modal from './modal';

export const rootReducer = combineReducers({
  customers,
  products,
  modal,
});