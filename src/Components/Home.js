import React from 'react'
import { motion } from 'framer-motion'
import { animation } from '../Animations/divAnimation.js'

export default function Home (props) {

  // touch hook to allow navigating the site with swipes
  const [touchPosX, setTouchPosX] = React.useState(null)

  function handleTouchStart (event) {
    const touchDownX = event.touches[0].clientX
    setTouchPosX(touchDownX)
  }

  function handleTouchMove (event) {
    const touchDownX = touchPosX
    if (touchDownX === null) return
    const currentTouchX = event.touches[0].clientX
    const diffX = touchDownX - currentTouchX
    if (diffX > 5) next()
    if (diffX < -5) prev()
    setTouchPosX(null)
  }

  function next() {
    props.changeCurrentPage(1)
  }

  function prev() {
    props.changeCurrentPage(3)
  }

  return (
    <motion.div 
    
    key='home-div'
    animate={animation[0]}
    transition={animation[1]}
    initial={animation[2]}
    exit={animation[3]}

    className='home glass' 
   
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}>

      <div className='home__content'>

      <p className='home__subtitle j-l'>
          {`Hello, my name is`}
        </p>

        <h1 className='home__title'>
          {`Bartosz Surma`}
        </h1>

        <p className='home__subtitle j-r'>
          {`and I'm an aspiring frontend developer.`}
        </p>

        <div className='home__btn-container'>
          <button onClick={() => props.changeCurrentPage(1)} className='home__next-btn'> {'About me'} </button>
        </div>

      </div>

    </motion.div>
  )
}