import React from 'react'
import filler from './assets/filler.png'
import './about.css'

function About() {
    return (
        <div>
            <div className="relative hero container max-w-screen-lg overflow-hidden mx-auto pb-10  h-screen text-white border-white">
                <div className='container-box-custom'>
                    <div className='about-left flex-col-custom'>
                            <div className='heading text-7xl stylin font-bold'>ABOUT US</div>
                            <div className='content text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna .</div>
                    </div>
                    <div className='about-right'>
                        <img src={filler} className='h-80 w-96'></img>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About;