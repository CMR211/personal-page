import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { animation } from '../Animations/divAnimation.js'
import { portfolioAnimation } from '../Animations/portfolioAnimation.js'
import getGridPosition from '../Functions/getGridPosition.js'

export default function Portfolio (props) {

  const topGridStyle = {
    gridColumn: `${getGridPosition(props.config, 'big', 'colStart')} / ${getGridPosition(props.config, 'big', 'colEnd')}`,
    gridRow: `${getGridPosition(props.config, 'big', 'rowStart')} / ${getGridPosition(props.config, 'big', 'rowEnd')}`,
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
      desc: 'Design inspired by frontendmentor.io challange, bilingual website, made with react.',
      live: 'https://cmr211-fem-space-tourism-website.netlify.app/',
      pic: './assets/projects/space-tourism-website.png'
    },
    {
      name: 'Flags app',
      desc: 'Design inspired by frontendmentor.io challange. Simple react web app fetching countries data from Restcountries API.',
      live: 'https://cmr211-fem-flags-app.netlify.app/',
      pic: './assets/projects/flags-app.png'
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
        style={topGridStyle}>
        
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
              <a className='project__link'href={projects[currentProject].live}>{`Live site preview at netlify`}</a>
            </div>
            <img id='portfolio__pic' className='project__pic' onClick={() => toggleFullScreen()} src={projects[currentProject].pic} alt={projects[currentProject].name} ></img>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  )
}