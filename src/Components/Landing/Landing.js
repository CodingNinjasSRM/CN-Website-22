import React from 'react'
import style from './Landing.module.css'
import ninja from './assets/ninja.svg'
import group from './assets/Group.svg'

function Landing() {
    return (
        <div>
            <div className="mx-auto left-6 max-w-screen-lg overflow-hidden justify-center container pb-10 ">
                <img src={ninja} className="inset-0 object-cover mx-auto mt-10"  alt="Ninja"/>
                <img src={group} className="md:w-auto w-2/3 animate-spin animate-slow-spin absolute inset-0 object-cover mx-auto mt-20 top-7 md:mt-20 md:bottom-2 md:top-16 "  alt="Group"/>    
            </div>
        </div>
    )
}

export default Landing;