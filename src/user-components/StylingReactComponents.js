import React from 'react'
import './myStyles.css'

function StylingReactComponents(props) {
  let className = props.primary ? 'primary' : ''
  return (

    <div><p className = {`${className} fontSize`}>Hello React</p></div>
  )
}

export default StylingReactComponents