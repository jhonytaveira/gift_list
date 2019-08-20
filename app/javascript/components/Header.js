import React from 'react'

const Header = () => {
  return (
    <div>
      <header className={'grid header'}>
        <section className={'col-1-3'}>
          <a href={'#'}>
            {'<< VOLTAR PARA CATEGORIAS'}
          </a>
        </section>
        
        <section className={'col-1-3 logo'}>
          <p className={'center'}>LOGOTIPO DO CLIENTE</p>
        </section>
        
        <section className={'col-1-3 clearfix'}>
          <a className={'pull-right'} href={'#'}>LOGIN | CADASTRO </a>
        </section>
      </header>
    </div>
  )
}

export default Header
