import React from 'react'

function ListChild({person}) {
  return (
    <div><h3>Person's name is {person.name} ,he is {person.age} , years old and from {person.city}</h3></div>
  )
}

export default ListChild;