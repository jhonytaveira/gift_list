import React, { Component } from 'react'

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

export default class Search extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      value: props.value
    }
    
    this.timer = null
  
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.triggerChange = this.triggerChange.bind(this);
  
  }
  
  componentWillMount () {
    this.timer = null
  }
  
  handleChange (e) {
    clearTimeout(this.timer)
    
    this.setState(
      { value: e.target.value }
    )
    
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL)
  }
  
  handleKeyDown (e) {
    if (e.keyCode === ENTER_KEY) {
      this.triggerChange()
    }
  }
  
  triggerChange () {
    const { value } = this.state
    
    this.props.searchProducts(value)
  }
  
  render () {
    return (
      <section className={'container no-padding'}>
        <div className={'col-1-4 no-padding'}>
          <input
            name={'product-search'}
            onChange={this.handleChange}
            type={'search'}
            onKeyDown={this.handleKeyDown}
            placeholder={'Buscar pelo nome do produto'}/>
        </div>
      </section>
    )
  }
}
