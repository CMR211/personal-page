import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { animation } from '../Animations/divAnimation.js'

export default function About (props) {

  const topGridStyle = {
    gridColumn: `${Math.round(props.config[0]*0.15)+1} / ${Math.round(props.config[0]*0.85)+1}`,
    gridRow: `${Math.round(props.config[2]*0.1)+1} / ${Math.round(props.config[2]*0.8)+1}`,
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
          I've started learning web development in October 2021. 
        </p>
        <p className='p__justify'>
          I've been <span className='accent'>self-learning</span> all the time, studying basics of html, css, javascript, finally jumping to React environment, which I'm really enjoying so far. It wasn't that easy while being employed full-time but I think I'm starting to see webdev at least as a familiar ground. My plan is to educate myself further, typescript and redux are my next goals.
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