import React from "react"
import { Provider, connect } from 'react-redux';
import {
  bindActionCreators,
  createStore,
  applyMiddleware
} from 'redux';
import rootReducer from '../../redux/rootReducer';
import thunk from 'redux-thunk';
import createDebounce from 'redux-debounced';
import ProductsContainer from './productsContainer';
import {
  addRequestedQuantityProduct,
  getProducts,
  searchProducts,
  byCategory
} from '../../redux/products'

function mapStateToProps(state) {
  const {
    products,
    totalProducts,
    categories,
    subcategories,
  } = state
  
  return {
    products,
    totalProducts,
    categories,
    subcategories
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    getProducts,
    searchProducts,
    addRequestedQuantityProduct,
    byCategory
  }, dispatch),
});

const Component = connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

export default function Products(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk, createDebounce()));
  
  return (
    <Provider store={store}>
      <Component perPage={8}/>
    </Provider>
  );
}
