import React, { Component } from 'react';
import Footer from '../Footer'
import Products from '../products/index'
import Banner from '../Banner'
import WizardSteps from '../WizardSteps'
import Header from '../Header'

export default class MyListContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Header/>
        <WizardSteps/>
        <Banner/>
        <Products
          { ...this.props }
        />
        <Footer/>
      </div>
    );
  }
}
