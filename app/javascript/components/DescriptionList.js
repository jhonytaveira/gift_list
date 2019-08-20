import React from 'react'

const DescriptionList = ({
  totalList,
  quantityProductsRequested
}) => {
  return (
    <section className={'container-description-list'}>
      <p className={'list-owner-name'}>O Bebê Nerd</p>
      
      <p className={'total-items'}>{quantityProductsRequested} itens com o total de R$ {totalList},00</p>
      <button className={'btn-primary'}>QUERO ESTA LISTA!</button>
      <p className={'instruction-configuration'}>Você poderá dar um nome exclusivo e escolher uma foto dos seus
        depois.</p>
    </section>
  )
}

export default DescriptionList
