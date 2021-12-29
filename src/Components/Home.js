import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { motion } from 'framer-motion'
import { animation } from '../Animations/divAnimation.js'

export default function Home (props) {

  const topGridStyle = {
    gridColumn: `${Math.round(props.config[0]*0.25)+1} / ${Math.round(props.config[0]*0.75)+1}`,
    gridRow: `${Math.round(props.config[2]*0.2)+1} / ${Math.round(props.config[2]*0.8)+1}`,
  }

  return (
    <motion.div 

    key='home-div'
    animate={animation[0]}
    transition={animation[1]}
    initial={animation[2]}
    exit={animation[3]}

    className='home glass' 
    style={topGridStyle}>

      <div className='home__content'>

        <h1 className='home__title'>
          Hello, my name is<br />
          <span className='accent'>Bartosz Surma</span>
        </h1>

        <p className='home__subtitle'>
          {`And I'm an aspiring frontend developer `}<span className='font--arial'>{`:)`}</span>
        </p>

      </div>

    </motion.div>
  )
}