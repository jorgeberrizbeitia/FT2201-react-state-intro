import React from 'react'
import allWizards from "../wizards.json"
import { useState } from "react"

import WizardCard from '../components/WizardCard'

function WizardList() {

  // necesitaremos crear un estado para nuestra lista
  const [ wizards, setWizards ] = useState( allWizards.slice(0, 3) )
  /* necesitaremos un slice */

  const handleAddWizards = () => {
    console.log("añadiendo wizards")

    // randomizar un wizard del array
    // necesito una posicion aleatoria del array
    const randomPos = Math.floor(Math.random() * allWizards.length )
    const randomWizard = allWizards[randomPos]

    // añadirlo a el estado wizards
    // wizards.push(randomWizard) // nunca modificar el estado directamente

    setWizards( [ randomWizard, ...wizards ] )

  }

  const handleSortWizards = () => {
    
    // wizards.sort() // NO modificamos el estado. sort muta el array original

    // clonar el array
    const wizardsCopy = [...wizards]

    // en algun momento un sort
    // ordenarlo
    // wizardsCopy.sort((elem1, elem2) => {
    //   if (elem1.name > elem2.name) {
    //     return 1
    //   } else {
    //     return -1
    //   }
    // })
    // wizardsCopy.sort((elem1, elem2) => elem1.name > elem2.name ? 1 : -1)
    wizardsCopy.sort((elem1, elem2) => elem1.name.localeCompare(elem2.name))

    // actualizar el estado wizards
    setWizards(wizardsCopy)

  }

  const handleDelete = (positionWizard) => {

    // podríamos pasar el id y hacer un filter para remover el elemento de ese id
    const wizardsCopy = [...wizards]
    wizardsCopy.splice(positionWizard, 1)
    setWizards(wizardsCopy)

  }

  return (
    <div>

      <h1>Wizard List</h1>

      <button onClick={handleAddWizards}>Añadir Wizards</button>
      <button onClick={handleSortWizards}>Ordenar Wizards por nombre</button>

      {/* aqui aplicaremos un map sobre el array */}
      { wizards.map((eachWizard, index) => {

        {/* return (
          <div key={eachWizard.id} className="wizard-card">
            <h3>{eachWizard.name}</h3>
            <p>{eachWizard.description}</p>
            <button onClick={ () => handleDelete(index) }>Borrar</button>
          </div>
        ) */}

        return (
          <WizardCard eachWizard={eachWizard} handleDeleteProp={handleDelete} index={index}/>
        )

      }) }

    </div>
  )
}

export default WizardList