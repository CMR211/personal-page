import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { animation } from '../Animations/divAnimation.js'

export default function Portfolio (props) {
  const topGridStyle = {
    gridColumn: `${Math.round(props.config[0]*0.15)+1} / ${Math.round(props.config[0]*0.85)+1}`,
    gridRow: `${Math.round(props.config[2]*0.1)+1} / ${Math.round(props.config[2]*0.8)+1}`,
  }

  return (
      <motion.div 
        key='about-div'
        animate={animation[0]}
        transition={animation[1]}
        initial={animation[2]}
        exit={animation[3]}
        className='about glass'  
        style={topGridStyle}>
        
        <div className='portfolio__project'>

        </div>

      </motion.div>
  )
}