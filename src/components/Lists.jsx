import React from 'react'

function Lists() {

  const someArr = ["Hola", "Hello", "Bonjour", "Hallo"]
  const jsxArr = [<p>Hola</p>, <p>Hello</p>, <p>Bonjour</p>, <p>Hallo</p>]

  // ?como modificamos los elementos de someArr para que se vean como los de jsxArr ?

  const someBooks = [
    { _id: 123, title: "El Hobbit", author: "Tolkien"},
    { _id: 345, title: "Harry Potter", author: "JK Rowling"}
  ]

  return (
    <div>
    
    <h1>Lists</h1>
    
    {someArr.map((eachElem, index) => {
      return (
        <p key={index+eachElem}>{eachElem}</p>
      )
    })}

    {someBooks.map((eachBook) => {
      return (
        <React.Fragment key={eachBook._id}>
          <p>{eachBook.title}</p>
          <p>{eachBook.author}</p>
        </React.Fragment>
      )
    })}

    </div>
  )
}

export default Lists