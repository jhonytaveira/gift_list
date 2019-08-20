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
import MyListContainer from './myListContainer'
import {
  getProducts,
  searchProducts
} from '../../redux/products'

function mapStateToProps(state) {
  const {
    categories,
    subcategories,
    totalProducts,
    perPage,
    products,
  } = state
  
  return {
    categories,
    subcategories,
    totalProducts,
    products,
    perPage,
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    getProducts,
    searchProducts,
  }, dispatch),
});

const Component = connect(mapStateToProps, mapDispatchToProps)(MyListContainer);

export default function MyList(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk, createDebounce()));

  return (
    <Provider store={store}>
      <Component/>
    </Provider>
  );
}
