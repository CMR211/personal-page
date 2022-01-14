import React from 'react'
import { motion } from 'framer-motion'
import { animation } from '../Animations/divAnimation.js'

export default function About (props) {

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
    props.changeCurrentPage(2)
  }

  function prev() {
    props.changeCurrentPage(0)
  }

  const skillsArray = [
    ['HTML5', 'fab fa-html5'],
    ['CSS3', 'fab fa-css3-alt'],
    ['Sass/SCSS', 'fab fa-sass'],
    ['JavaScript, ECMA6', 'fab fa-js'],
    ['React 16.8+', 'fab fa-react'],
    ['Git/Github', 'fab fa-github']
  ]

  const mappedSkills = skillsArray.map( (item, index) => {
    return (
      <div className='about__skills__subcontainer' key={`skill-${index}`}>
        <i className={`${item[1]} about__skills__icon`}></i>
        <p className='about__skills__caption'>{item[0]}</p>
      </div>
    )
  })

  function getTimeSinceStart() {
    const currentTime = new Date()
    const startTime = new Date('october 2021')
    const timeDiff = Math.round( (currentTime - startTime) / 1000 / 3600 / 24 / 31 )
    return timeDiff
  }

  return (
      <motion.div 
        key='about-div'
        animate={animation[0]}
        transition={animation[1]}
        initial={animation[2]}
        exit={animation[3]}
        className='about glass'  
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}>

        <h1 className='about__title'>About me</h1>
        <p className='about__text'>
          Since I'd always loved designing stuff and layouts I've decided to begin learning web development from scratch about {getTimeSinceStart()} months ago. I've fallen in love with React and right now I'm looking forward to my first job opportunity as a frontend dev.
        </p>
        
        <div className='about__detail'>
          <i className="fas fa-graduation-cap about__detail__icon"></i>
          <p className='about__detail__text'>MSc in Civil Engineering (Roads designing)<br /><span className='smaller'>Wroclaw University of Science and Technology</span></p>
        </div>
        
        <div className='about__detail about__education'>
          <i className="fas fa-list-alt about__detail__icon"></i>
          <p className='about__detail__text'>I'm 29, currently living in Wroclaw</p>
        </div>

          <div className='about__skills'>
            <h3 className='about__skills__title'>Tools</h3>
            <div className='about__skills__container'>
              {mappedSkills}
            </div>
        </div>
        <div className='about__btn-container'>
          <button onClick={() => props.changeCurrentPage(2)} className='glass about__next-btn'> {'My portfolio'} </button>
        </div>
      </motion.div>
  )
}