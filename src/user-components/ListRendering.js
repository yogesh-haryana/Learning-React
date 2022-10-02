import React from 'react'
import ListChild from './ListChild';

function ListRendering() {
    // const names = ['Yogesh', 'varsha','Sachin', 'Ritika']
    // const nameList = names.map((name)=><h2>{name}</h2>)

    const person = [
        {
            name: 'Yogesh',
            age: 21,
            city: 'Palwal'
        },
        {
            name: 'varsha',
            age: 22,
            city: 'Rohtang'
        },
        {
            name: 'Sachin',
            age: 22,
            city: 'Gorakhpur'
        }
    ]

    const personList = (person.map(person => <ListChild key={person.name} person = {person}/>))

    return (
        <div>
            {personList}
        </div>
    )
}

export default ListRendering;