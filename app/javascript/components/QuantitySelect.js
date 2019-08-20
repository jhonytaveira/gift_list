import React, { Component } from 'react'

export default class QuantitySelect extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      counter: 0
    }
    
    this.handleChange = this.handleChange.bind(this)
  }
  
  renderOptions () {
    const { product } = this.props
    
    return [...Array(product.quantity).keys()].map((index) => {
      return (
        <option>{index + 1}</option>
      )
    })
  }
  
  handleChange(e) {
    const { product } = this.props
  
    this.props.addRequestedQuantityProduct(product, e.target.value)
  }
  
  render () {
    const { product } = this.props
  
    return (
      <section>
        <section className={'col-1-2 control-label'}>
          <label>Quantidade:</label>
        </section>
        <section className={'col-1-2 control-select'}>
          <select
            placeholder={'Quantidade'}
            name={`quantity-${product.id}`}
            onChange={this.handleChange}>
            <option>0</option>
            { this.renderOptions() }
          </select>
        </section>
      </section>
    )
  }
}
