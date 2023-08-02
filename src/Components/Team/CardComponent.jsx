import React from 'react'

const CardComponent = ({name, position, img}) => {
  return (
    <div>
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <h3>{position}</h3>
    </div>
  )
}

export default CardComponent
