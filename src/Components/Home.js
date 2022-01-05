import React from 'react'
import { motion } from 'framer-motion'
import { animation } from '../Animations/divAnimation.js'
import getGridPosition from '../Functions/getGridPosition.js'

export default function Home (props) {

  const topGridStyle = {
    gridColumn: `${getGridPosition(props.config, 'small', 'colStart')} / ${getGridPosition(props.config, 'small', 'colEnd')}`,
    gridRow: `${getGridPosition(props.config, 'small', 'rowStart')} / ${getGridPosition(props.config, 'small', 'rowEnd')}`,
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