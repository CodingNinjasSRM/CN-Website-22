import React from 'react'
import style from './Domains.module.css'
import ninja from './assets/Ninja img.svg'
import { motion } from "framer-motion";
const Domains = () => {
  return (
    <div className={`${style.domainsbg}`}>
        <div className={`${style.ninjacontainer}`}>
            <img src={ninja}/>
        </div>
        <div className={`${style.domainBoxes}`}>
            <motion.div initial={{x:"0"}} whileInView={{ x: "-120%" }} className={`${style.technical}`}>Technical</motion.div>
            <motion.div initial={{x:"0"}} whileInView={{ x: "120%" }} className={`${style.nonTechnical}`}>Non-Technical</motion.div>
        </div>
    </div>
  )
}

export default Domains