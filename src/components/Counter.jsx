import React from 'react'
import { useState } from "react" // este es el hook

function Counter() {

  // const algo = useState(0)
  // let counter = algo[0] // este será mi stado para el contador
  // const setCounter = algo[1] // esta será la funcion para modificar el estado

  const [ counter, setCounter ] = useState(0)
  const [ message, setMessage  ] = useState("")

  const handleIncrease = () => {
    // aqui ocurrira un poco de magia de react
    console.log("intentando incrementar")
    // const num = document.querySelector("h3")
    // num.innerText = Number(num.innerText) + 1
    //* esto funciona pero manipulamos directamente el DOM :(

    // ahora incrementamos mel stado de counter
    setCounter( counter + 1 )
  }

  const handleDecrease = () => {
    setCounter( counter - 1 )
  }

  const handleMessage = () => {

    const text = `el valor guardado es: ${counter}`
    setMessage( text )

  }

  return (
    <div>
    
      <h1>Counter</h1>
      <h3>{counter}</h3>

      <button disabled={counter > 0 ? false : true} onClick={ handleDecrease }>-</button>
      <button onClick={ handleIncrease }>+</button>

      <br />

      <button onClick={ handleMessage }> Guardar valor </button>

      <p>SAVE: {message}</p>
    
    </div>
  )
}

export default Counter