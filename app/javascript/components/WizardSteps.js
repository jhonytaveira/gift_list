import React from 'react'

const WizardSteps = () => {
  return (
    <section className={"grid wizard-steps"}>
      <section className={"col-1-4"}>
        <a href={"#"}>Etapa 1 <br/> Descrição da etapa 1</a>
      </section>
    
      <section className={"col-1-4"}>
        <a href={"#"} className={"active"}>Etapa 2 <br/> Descrição da etapa 2</a>
      </section>
    
      <section className={"col-1-4"}>
        <a href={"#"}>Etapa 3 <br/> Descrição da etapa 3</a>
      </section>
    
      <section className={"col-1-4"}>
        <a href={"#"}>Etapa 4 <br/> Descrição da etapa 4</a>
      </section>
    </section>
  )
}

export default WizardSteps
