import axios from 'axios'

export const SHOW_PRODUCTS_SUCCESS = 'SHOW_PRODUCTS_SUCCESS'
export const SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS'
export const ADD_REQUESTED_QUANTITY_PRODUCT_SUCCESS = 'ADD_REQUESTED_QUANTITY_PRODUCT_SUCCESS'
export const BY_CATEGORY_SUCCESS = 'BY_CATEGORY_SUCCESS'

export default function reducer (state = {}, action) {
  switch (action.type) {
    case SHOW_PRODUCTS_SUCCESS:
      return {
        data: action.products,
        pageCount: action.totalProducts && Math.ceil(action.totalProducts / action.perPage)
      }
    case SEARCH_PRODUCTS_SUCCESS:
      return {
        data: action.products
      }
    case BY_CATEGORY_SUCCESS:
      return {
        data: action.products
      }
    case ADD_REQUESTED_QUANTITY_PRODUCT_SUCCESS:
        return addRequestedQttProduct(state, action)
    default:
      return state
  }
}

export function getProducts (data) {
  return function action (dispatch) {
    dispatch({ type: SHOW_PRODUCTS_SUCCESS })
    
    const request = axios({
      method: 'GET',
      url: '/products',
      params: {
        limit: data.perPage,
        offset: data.offset
      }
    })
    
    return request.then(
      response => dispatch(fetchShowProductsSuccess(response, data))
    )
  }
}

export function searchProducts (name) {
  return function action (dispatch) {
    dispatch({
      type: SEARCH_PRODUCTS_SUCCESS,
    })
    
    const request = axios({
      method: 'GET',
      url: '/products/search',
      params: { name }
    })
    
    return request.then(
      response => dispatch(fetchProductsSuccess(response))
    )
  }
}

export function byCategory (subcategoryId) {
  return function action (dispatch) {
    dispatch({
      type: BY_CATEGORY_SUCCESS,
    })
    
    const request = axios({
      method: 'GET',
      url: '/products/by_category',
      params: { subcategory_id: subcategoryId }
    })
    
    return request.then(
      response => dispatch(fetchProductsSuccess(response))
    )
  }
}

export function addRequestedQuantityProduct (product, qtt) {
  return function action (dispatch) {
    return dispatch({ type: ADD_REQUESTED_QUANTITY_PRODUCT_SUCCESS,
      requestedQuantity: qtt,
      product
    })
  }
}

function fetchProductsSuccess (response) {
  return {
    type: SEARCH_PRODUCTS_SUCCESS,
    products: response.data,
  }
}

function fetchShowProductsSuccess (response, data) {
  const {
    totalProducts,
    perPage
  } = data
  
  return {
    type: SHOW_PRODUCTS_SUCCESS,
    products: response.data,
    totalProducts: totalProducts,
    perPage: perPage
  }
}

function addRequestedQttProduct(state, action) {
  const data = state.data.map(product => {
    if (product.id === action.product.id) {
      return {...product, requestedQuantity: action.requestedQuantity}
    };
    return product;
  });
  return { data }
}
