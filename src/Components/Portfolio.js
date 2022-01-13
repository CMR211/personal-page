import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { animation } from '../Animations/divAnimation.js'
import { portfolioAnimation } from '../Animations/portfolioAnimation.js'
import getGridPosition from '../Functions/getGridPosition.js'
import { useNavigate } from 'react-router'

export default function Portfolio (props) {



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
    props.changeCurrentPage(3)
  }

  function prev() {
    props.changeCurrentPage(1)
  }

  const [currentProject, setCurrentProject] = React.useState(0)

  const [popup, setPopup] = React.useState(false)

  function changeProject (direction) {
    if (direction === 'left') {
      console.log('clicked left')
      if (currentProject === 0) setCurrentProject(projects.length - 1)
      else setCurrentProject(currentProject - 1)
    }
    if (direction === 'right') {
      console.log('clicked right')
      if (currentProject === (projects.length - 1)) setCurrentProject(0)
      else setCurrentProject(currentProject + 1)
    }
  }

  const projects = [
    {
      name: 'Space tourism website',
      desc: 'Design inspired by frontendmentor.io challange. Bilingual website, made with react.',
      live: 'https://cmr211-fem-space-tourism-website.netlify.app/',
      pic: '../assets/projects/space-tourism-website.png'
    },
    {
      name: 'Flags app',
      desc: 'Design inspired by frontendmentor.io challange. Simple react web app fetching countries data from Restcountries API.',
      live: 'https://cmr211-fem-flags-app.netlify.app/',
      pic: '../assets/projects/flags-app.png'
    }
  ]

  function toggleFullScreen() {
    setPopup(!popup)
  }

  return (
    <>
      <AnimatePresence>
        {popup && <motion.div 
          key='popup'
          animate={{opacity: 1}}
          transition={{duration: 0.3}}
          initial={{opacity: 0.5}}
          exit={{opacity: 0.5}} 
          id='popup' 
          className='popup' 
          onClick={() => toggleFullScreen()}>
          <img alt={projects[currentProject].name} src={projects[currentProject].pic}></img>
        </motion.div>}
      </AnimatePresence>

      <motion.div 
        key='portfolio-div'
        animate={animation[0]}
        transition={animation[1]}
        initial={animation[2]}
        exit={animation[3]}
        className='portfolio glass'  

        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}>
        
        <h1 className='portfolio__title'>My portfolio</h1>

        <div className='portfolio__nav-btns'>
          <div>
            <button onClick={() => changeProject('left')}><i className="fas fa-arrow-left"></i></button>
            <span className='accent'>{currentProject + 1} / {projects.length}</span>
            <button onClick={() => changeProject('right')}><i className="fas fa-arrow-right"></i></button>
          </div>
          <h2 className='project__title'>{projects[currentProject].name}</h2>
        </div> 
        <AnimatePresence exitBeforeEnter>
          <motion.div 
          animate={portfolioAnimation[0]}
          transition={portfolioAnimation[1]}
          initial={portfolioAnimation[2]}
          exit={portfolioAnimation[3]} 
          className='portfolio__project' 
          key={currentProject}>

            <div className='project__info'>
              <p className='project__desc'>{projects[currentProject].desc}</p>
              <a className='project__link'href={projects[currentProject].live}>
                <i className="fas fa-external-link-alt"></i>
                {` Click to see live preview at netlify.`}
              </a>
            </div>

            <img key={`pic${currentProject}`} id='portfolio__pic' className='project__pic' onClick={() => toggleFullScreen()} src={projects[currentProject].pic} alt={projects[currentProject].name} ></img>

          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  )
}