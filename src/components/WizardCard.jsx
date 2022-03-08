import React from 'react'

function WizardCard(props) {

  const {id, name, description } = props.eachWizard
  const { handleDeleteProp, index } = props

  return (
    <div key={id} className="wizard-card">
    <h3>{name}</h3>
    <p>{description}</p>
    {/* <p>posicion: {index}</p> */}
    <button onClick={ () => handleDeleteProp(index) }>Borrar</button>
  </div>
  )
}

export default WizardCard