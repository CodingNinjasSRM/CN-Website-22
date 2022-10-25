import React from 'react'
import style from './Team.module.css'
import rect from './assets/Rectangle 59.svg'
import element from './assets/Group 57.svg'
import rectblur from './assets/Rectangle 68.svg'
import rectblur2 from './assets/Rectangle 73.svg'
import { motion } from "framer-motion"
import spray from './assets/spray.png'
function Team() {

    return (
        <>
        <div className='md:text-8xl text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-black text-center font-extrabold md:mb-10 md:pt-20 pt-10 mt-20'>TEAM</div>
        <div className='text-center mt-20'>
            <img src={rect} className='mx-auto'/>
            <img src={element} className='mx-auto'/>
        </div>
        <div className='md:flex justify-center pb-20'>
            <img src={rect} className='mx-auto'/>
            <img src={rect} className='mx-auto'/>
            <img src={rect} className='mx-auto'/>
            <img src={rect} className='mx-auto'/>
        </div>
     
        <div className='md:flex blur-md justify-center pt-10 pb-20'>
            <img src={rectblur} className='mx-auto'/>
            <img src={rectblur} className='mx-auto'/>
            <img src={rectblur} className='mx-auto'/>
        </div>
        <div className='md:flex blur-md px-20 mx-2 justify-center pt-10 pb-20 mb-10'>
            <img src={rectblur2} className='mx-auto'/>
            <img src={rectblur2} className='mx-auto'/>
            <img src={rectblur2} className='mx-auto'/>
            <img src={rectblur2} className='mx-auto'/>
            <img src={rectblur2} className='mx-auto'/>
        </div>
        <motion.img
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
    src={spray} className='w-1/6 h-1/6'
  />
       </>


    )
}

export default Team;