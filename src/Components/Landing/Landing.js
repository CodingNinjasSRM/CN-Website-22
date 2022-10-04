import React from 'react'
import style from './Landing.module.css'
import ninja from './assets/ninja.svg'
import group from './assets/Group.svg'

function Landing() {
    return (
        <div>
            <div className="relative hero container max-w-screen-lg overflow-hidden mx-auto pb-10 justify-center">
                <img src={ninja} className="inset-0 object-cover mx-auto mt-10"  alt="Ninja"/>
                <img src={group} className="animate-spin animate-slow-spin absolute inset-0 object-cover mx-auto mt-20 md:bottom-2 md:top-16 md:left-1"  alt="Group"/>
            </div>
        </div>
    )
}

export default Landing;