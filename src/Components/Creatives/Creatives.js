import React from 'react'
import style from './Creatives.module.css'
import bg from './assets/bg.svg'
import img from './assets/Img1.svg'
function Creatives() {
    return (
        <section className=''>
        <div className='md:text-7xl text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-black md:text-left md:pl-20 font-extrabold  md:pt-20 pt-20 mt-10'>CREATIVES</div>
        <div className='md:text-9xl  text-6xl text-opacity-45  text-neutral-900 md:text-left md:pl-20  md:ml-10 font-extrabold md:mb-10 mb-5 pb-2'>DOMAIN</div>
        <div className='md:flex md:pb-10 justify-center'>
            <p className='text-left md:text-xl mx-auto font-light text-white px-16 pt-10 md:px-20 md:pt-10 md:mx-2 md:pb-0 pb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna.
            orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna .<p className='md:pt-10 pt-10 mt-5 md:mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna.
            orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna .</p>
            </p>
            <img className='md:mb-5 md:block hidden md:w-100 md:h-100 w-1/2 h-1/2 md:mr-10 md:pr-20' src={img}/>
        </div>
        </section>
    )
}

export default Creatives;