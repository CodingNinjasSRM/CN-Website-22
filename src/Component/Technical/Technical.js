import React from 'react'
import style from './Technical.module.css'
import bg from './assets/bg.svg'
import img from './assets/Img1.svg'
function Technical() {
    return (
        <section className=''>
        <div className='md:text-7xl text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-black text-left md:pl-20 font-extrabold  md:pt-20 pt-10 mt-20'>TECHNICAL</div>
        <div className='md:text-9xl text-6xl text-opacity-45 text-neutral-900  text-left md:pl-20 md:ml-10 font-extrabold md:mb-10 mb-5 pb-2'>DOMAIN</div>
        <div className='flex md:pb-10'>
            <p className='text-left md:text-xl font-light text-white md:px-20 md:pt-10 md:mx-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna.
            orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna .<p className='md:pt-10 md:mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna.
            orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna .</p>
            </p>
            <img className='mb-5 mr-10 pr-20' src={img}/>
        </div>
        </section>
    )
}

export default Technical;