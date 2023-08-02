import React from 'react'
import CardComponent from './CardComponent'

import { board, leads, president, vicePresident } from "./board"

const TeamNew = () => {
  return (
    <div className='text-white'>
      <p>hello</p>
      {president.map((name, position, img) => (
        <CardComponent name={name} position={position} img={img} />
      ) )}
    </div>
  )
}

export default TeamNew
