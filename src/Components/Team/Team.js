import React from 'react'
import style1 from './Team.module.css'
import rect from './assets/Rectangle 59.svg'
import element from './assets/Group 57.svg'
import rectblur from './assets/Rectangle 68.svg'
import rectblur2 from './assets/Rectangle 73.svg'
import { motion } from "framer-motion"
import bg from './assets/bg.svg'
import studio from '@theatre/studio'
import { Canvas } from '@react-three/fiber'
import extension from '@theatre/r3f/dist/extension'
import { Html, Stats, Text3D } from "@react-three/drei";
import Cloud from '../Smoke/Smoke'
import Navbar from '../Navbar/Navbar'
function Team() {

    return (
        <>
        <div>
            <Navbar/>
        </div>
        <div className='h-[500vh] w-full'>
        <Canvas>
            <Cloud/> 
            
            <ambientLight intensity={2} />
            <pointLight theatreKey="pLight" position={[40, 40,40]} />
            <group position={[-.25,3.9,0]} scale={1}>
                <mesh>
                <meshStandardMaterial color={"red"} />
                <Html>

                    <div>
                    <div className={`relative md:text-8xl text-5xl text-transparent bg-clip-text text-center font-extrabold md:mb-10 md:pt-20 mt-12 ${style1.teamheading}`}>TEAM</div>
                    <div className='relative p-10 text-center mt-20'>
                        <img src={rect} className='mx-auto'/>
                        <img src={element} className='mx-auto'/>
                    </div>
                    <div className='relative md:flex justify-center pb-20'>
                        <img src={rect} className='mx-auto'/>
                        <img src={rect} className='mx-auto'/>
                        <img src={rect} className='mx-auto'/>
                        <img src={rect} className='mx-auto'/>
                    </div>

                    <div className='relative md:flex blur-md justify-center pt-10 pb-20'>
                        <img src={rectblur} className='mx-auto'/>
                        <img src={rectblur} className='mx-auto'/>
                        <img src={rectblur} className='mx-auto'/>
                    </div>
                    <div className='relative md:flex blur-md px-20 mx-2 justify-center pt-10 pb-20 mb-10'>
                        <img src={rectblur2} className='mx-auto'/>
                        <img src={rectblur2} className='mx-auto'/>
                        <img src={rectblur2} className='mx-auto'/>
                        <img src={rectblur2} className='mx-auto'/>
                        <img src={rectblur2} className='mx-auto'/>
                    </div>
                    </div>
                </Html>
                </mesh>
            </group>
        </Canvas>
        </div>

        </>

    )
}

export default Team;