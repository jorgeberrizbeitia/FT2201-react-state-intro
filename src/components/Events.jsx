
import React from 'react'

function Events() {

  const printHello = () => {
    console.log("Hello")
  }

  const printDate = () => {
    console.log( new Date() )
  }

  const handleMouseEnter = () => {
    console.log("Hola")
  }

  const handleMouseLeave = () => {
    console.log("Adios")
  }

  const handleChange = (event) => {
    console.log("clickando teclas", event.target.value)
  }


  return (
    <div>
    
      <h1>Events</h1>

      {/* <button onClick={ () => console.log("Hello") }>Click!</button> */}
      <button onClick={ printHello }>Click!</button>

      {/* <button onClick={ printHello() }>Click!</button> //!No hacer esto! */}

      <button onClick={ printDate }>Decir la fecha</button>

      <button onDoubleClick={ printDate }>Decir Fecha (double click)</button>

      <div onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
        <h2>Hola</h2>
      </div>

      <input type="text" onChange={ handleChange } />
    
    </div>
  )
}

export default Events