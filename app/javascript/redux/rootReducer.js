import { combineReducers } from 'redux'
import products from './products'

function categories(state = []) {
  return state;
}

function subcategories(state = []) {
  return state;
}

function totalProducts(state = 0) {
  return state;
}

export default combineReducers({
  products,
  categories,
  subcategories,
  totalProducts,
});
