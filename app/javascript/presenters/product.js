export function totalCalculate (products) {
  if (!products) {
    return 0
  }
  
  const requestedProducts = productsRequested(products)
  
  return requestedProducts.length && requestedProducts.reduce(function (acc, cur) {
    return acc + parseFloat(cur.value) * Number(cur.requestedQuantity)
  }, 0)
}

export function quantityProductsRequested (products) {
  if (!products) {
    return 0
  }
  
  return productsRequested(products).reduce(function (acc, cur) {
    return acc + Number(cur.requestedQuantity)
  }, 0)
}

function productsRequested (products) {
  const isProductRequested = product => product.requestedQuantity > 0
  
  return products.filter(isProductRequested)
}
