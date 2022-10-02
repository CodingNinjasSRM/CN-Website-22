import React from 'react'
import style from './Landing.module.css'
import ninja from './assets/ninja.svg'
function Landing() {
    return (
        <div>
            <div class="hero container max-w-screen-lg mx-auto pb-10 justify-center">
                <img src={ninja} class="mx-auto" alt="Ninja"/>
            </div>
        </div>
    )
}

export default Landing;