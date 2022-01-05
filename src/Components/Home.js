import React from 'react'
import { motion } from 'framer-motion'
import { animation } from '../Animations/divAnimation.js'
import getGridPosition from '../Functions/getGridPosition.js'
import { useNavigate } from 'react-router'

export default function Home (props) {

  const topGridStyle = {
    gridColumn: `${getGridPosition(props.config, 'small', 'colStart')} / ${getGridPosition(props.config, 'small', 'colEnd')}`,
    gridRow: `${getGridPosition(props.config, 'small', 'rowStart')} / ${getGridPosition(props.config, 'small', 'rowEnd')}`,
  }

  // useNavigate hook form react-router to allow navigating with swipes
  const navigate = useNavigate()

  // touch hook to allow navigating the site with swipes
  const [touchPosX, setTouchPosX] = React.useState(null)
  const [touchPosY, setTouchPosY] = React.useState(null)

  function handleTouchStart (event) {
    const touchDownX = event.touches[0].clientX
    const touchDownY = event.touches[0].clientY
    setTouchPosX(touchDownX)
    setTouchPosY(touchDownY)
  }

  function handleTouchMove (event) {
    const touchDownX = touchPosX
    const touchDownY = touchPosY
    if (touchDownX === null && touchDownY === null) return
    const currentTouchX = event.touches[0].clientX
    const currentTouchY = event.touches[0].clientY
    const diffX = touchDownX - currentTouchX
    const diffY = touchDownY - currentTouchY
    if (diffX > 20) next()
    if (diffX < -20) prev()
    if (diffY > 20) next()
    if (diffY < -20) prev()
    setTouchPosX(null)
    setTouchPosY(null)
  }

  function next() {
    navigate('/about')
    console.log('swiped next')
  }

  function prev() {}

  return (
    <motion.div 

    key='home-div'
    animate={animation[0]}
    transition={animation[1]}
    initial={animation[2]}
    exit={animation[3]}

    className='home glass' 
    style={topGridStyle}
    
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}>

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