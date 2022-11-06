import React from 'react'
import style from './Corporate.module.css'
import img from './assets/Img1.svg'
import leftar from './assets/leftar.svg'
import middle from './assets/middle.svg'
import rightar from './assets/rightar.svg'
import { Link } from 'react-router-dom'

function Corporate() {
    return (
        <div className={`${style.corporatebg}`}>
        <div className={`md:text-[84px] text-[35px] text-transparent bg-clip-text font-[800] md:pt-20 md:mt-10 mt-6 pt-20 ${style.corporateheading}`}>CORPORATE</div>
        <div className={`md:text-[130px] text-[50px] text-transparent bg-clip-text font-[800] md:mb-10 pb-2 ${style.domainsheading}`}>DOMAIN</div>
        <div className='md:flex md:pb-10 justify-center'>
            <p className='md:text-left md:text-xl text-[15px] mx-auto font-light text-white px-16 pt-10 md:px-20 md:pt-10 md:mx-2 md:pb-0 pb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna.
            orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna .<p className='md:block hidden md:pt-10 pt-10 mt-5 md:mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna.
            orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna .</p>
            </p>
            <img className='md:mb-5 md:block hidden md:w-100 md:h-100 w-1/2 h-1/2 md:mr-10 md:pr-20' src={img}/>
        </div>
        <div className='flex justify-center pb-20'>
            <Link to='/technical'><img src={leftar} className='mx-10 md:mx-10'/></Link>
            <img src={middle} className='hidden md:block'/>
            <Link to='/creative'><img src={rightar} className='mx-10 md:mx-10'/></Link>
        </div>
    </div>
    )
}

export default Corporate;