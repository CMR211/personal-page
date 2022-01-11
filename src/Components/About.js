import React from 'react'
import { motion } from 'framer-motion'
import { animation } from '../Animations/divAnimation.js'
import getGridPosition from '../Functions/getGridPosition.js'
import { useNavigate } from 'react-router'

export default function About (props) {

  // useNavigate hook form react-router to allow navigating with swipes
  const navigate = useNavigate()

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
    navigate('/portfolio')
  }

  function prev() {
    navigate('/')
  }

  const topGridStyle = {
    gridColumn: `${getGridPosition(props.config, 'big', 'colStart')} / ${getGridPosition(props.config, 'big', 'colEnd')}`,
    gridRow: `${getGridPosition(props.config, 'big', 'rowStart')} / ${getGridPosition(props.config, 'big', 'rowEnd')}`,
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
      <div className='skills__subcontainer' key={`skill-${index}`}>
        <i className={`${item[1]} skills__icon`}></i>
        <p className='skills__caption'>{item[0]}</p>
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
        style={topGridStyle}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}>
        <p className='p__justify'>
          Hi I'm <span className='accent'>Bartek.</span>
        </p>
        <p className='p__justify'>
          Since I'd always loved designing stuff and layouts I've decided to begin learning web development from scratch about {getTimeSinceStart()} months ago. I've fallen in love with React and right now I'm looking forward to my first job opportunity as a frontend dev.
        </p>
        
        <div className='detail-with-icon'>
          <i className="fas fa-graduation-cap icon-big"></i>
          <p className='p__with-icon'>MSc in Civil Engineering (Roads designing)<br /><span className='smaller'>Wroclaw University of Science and Technology</span></p>
        </div>
        <div className='detail-with-icon'>
          <i className="fas fa-list-alt icon-big"></i>
          <p className='p__with-icon'>I'm 29, currently living in Wroclaw</p>
        </div>

        <div className='flex-column flex-center'>
          <h3 className='skills__title'>Tools</h3>
          <div className='flex-row skills__container'>
            {mappedSkills}
          </div>
        </div>
      </motion.div>
  )
}