import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar (props) {
  return (
    <div 
      className='nav glass'
      style={props.bottomGridStyle}
      >

        <motion.a 
          href='#'
          whileHover={{x: -40}}
          >
          <i class="fas fa-home"></i>
        </motion.a>
        <a href='#'><i class="fas fa-feather-alt"></i></a>
        <a href='#'><i class="fas fa-shapes"></i></a>
        <a href='#'><i class="fas fa-envelope-open"></i></a>

    </div>
  )
}