import React, { Component } from 'react'
import Search from '../Search'
import QuantitySelect from '../QuantitySelect'
import DescriptionList from '../DescriptionList'
import MenuTree from '../MenuTree'
import { totalCalculate, quantityProductsRequested } from '../../presenters/product'
import Paginate from '../Paginate'
import defaultImage from '../../../assets/images/default-image.jpg'

export default class ProductsContainer extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      pageNumber: 0,
    }
  }
  
  loadProducts (offset = 0) {
    const {
      totalProducts,
      perPage,
      getProducts
    } = this.props
    
    const data = {
      totalProducts,
      offset,
      perPage,
    }
    
    getProducts(data)
  }
  
  componentDidMount () {
    this.loadProducts()
  }
  
  handlePageClick = data => {
    let selected = data.selected
    this.setState({ pageNumber: selected })
    
    let offset = Math.ceil(selected * this.props.perPage)
    
    this.loadProducts(offset)
  }
  
  render () {
    const {
      products,
      searchProducts,
      addRequestedQuantityProduct,
    } = this.props
    const data = products && products.data
    
    return (
      <div>
        <section className={'container-products'}>
          <DescriptionList
            totalList={totalCalculate(data)}
            quantityProductsRequested={quantityProductsRequested(data)}
            products={products}/>
          <MenuTree
            {...this.props}
          />
          <Search searchProducts={searchProducts}/>
          <br/>
          {
            data && data.map((product) => {
              return (
                <React.Fragment>
                  <section className={'col-1-4 mb-25 box-shadow-black'}>
                    <img src={product.image || defaultImage}/>
                    <p className={'product-name'}>{product.name}</p>
                    <p className={'product-quantity'}>{product.quantity}</p>
                    <p className={'product-value'}>R$ {product.value},00</p>
                    <br/>
                    <section className={'container-quantity no-padding'}>
                      <QuantitySelect
                        product={product}
                        addRequestedQuantityProduct={addRequestedQuantityProduct}
                      />
                    </section>
                  </section>
                </React.Fragment>
              )
            })
          }
          {
            data && <Paginate
              products={products}
              handlePageClick={this.handlePageClick}
              pageNumber={this.state.pageNumber}
            />
          }
        </section>
      </div>
    )
  }
}
