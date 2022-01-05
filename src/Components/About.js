import React from 'react'
import { motion } from 'framer-motion'
import { animation } from '../Animations/divAnimation.js'
import getGridPosition from '../Functions/getGridPosition.js'

export default function About (props) {

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
        style={topGridStyle}>
        <p className='p__justify'>
          Hi I'm <span className='accent'>Bartek.</span>
        </p>
        <p className='p__justify'>
          I've started learning web development about {getTimeSinceStart()} months ago. 
        </p>
        <p className='p__justify'>
          I've been <span className='accent'>self-learning</span> all the time, studying basics of html, css, javascript, finally jumping to React environment, which I'm really enjoying so far. It wasn't that easy while being employed full-time but I think I'm starting to see webdev at least as a familiar ground. {(window.innerWidth < 400) ? '' : 'My plan is to educate myself further, typescript and redux are my next goals.'}
        </p>
        <p className='p__justify'>
          Right now I'm looking forward to my first frontend developer job opportunity.
        </p>
        <div className='detail-with-icon'>
          <i className="fas fa-graduation-cap icon-big"></i>
          <p className='p__with-icon'> MSc in Civil Engineering, Road design</p>
        </div>
        <div className='detail-with-icon'>
          <i className="fas fa-list-alt icon-big"></i>
          <p className='p__with-icon'> 29, male, currently living in Wrocław</p>
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