import React from 'react'
import style from './Domains.module.css'
import ninja from './assets/Ninja img.svg'
import { motion } from "framer-motion";
import { Link, Links } from 'react-router-dom'

const Domains = () => {
  return (
    <div className={`${style.domainsbg}`}>
        <div className={`${style.ninjacontainer}`}>
            <img src={ninja}/>
        </div>
        <div className={`${style.domainBoxes}`}>
          <div>
            <Link to ="/technical">
              <motion.div transition={{ duration: 0.6, ease: "easeOut" }} initial={{x:"0"}} whileInView={{ x: "-120%" }} className={`${style.technical}`}>Technical</motion.div>
            </Link>
          </div>
          <div>
            <Link to="/nontechnical">
              <motion.div transition={{ duration: 0.6, ease: "easeOut" }} initial={{x:"0"}} whileInView={{ x: "120%" }} className={`${style.nonTechnical}`}>Non-Technical</motion.div>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Domains