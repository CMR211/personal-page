import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { animation } from '../Animations/divAnimation.js'

export default function Contact (props) {

  const topGridStyle = {
    gridColumn: `${Math.round(props.config[0]*0.25)+1} / ${Math.round(props.config[0]*0.75)+1}`,
    gridRow: `${Math.round(props.config[2]*0.2)+1} / ${Math.round(props.config[2]*0.8)+1}`,
  }

  const contactitems = [
    {
      icon: 'fas fa-phone',
      name: '794 903 163',
      link: 'tel:+48794903163'
    },
    {
      icon: 'fab fa-github',
      name: 'Github.com @CMR211',
      link: 'https://github.com/cmr211'
    },
    {
      icon: 'fab fa-linkedin',
      name: 'LinkedIn profile',
      link: 'https://linkedin.com/in/bartosz-surma-00b6a41a1'
    },
    {
      icon: 'fas fa-envelope-open',
      name: 'bartosz.surma211 @gmail.com',
      link: 'mailto:bartosz.surma211@gmail.com'
    }
  ]

  const mappedContactItems = contactitems.map((item) => { 
    return (
      <div className='contact__item'>
        <i className={`${item.icon} contact__icon`}></i>
        <a className='contact__link' href={item.link}>{item.name}</a>
      </div>
    )
  })

  return (
    <motion.div 
        key='contact-div'
        animate={animation[0]}
        transition={animation[1]}
        initial={animation[2]}
        exit={animation[3]}
        className='contact glass'  
        style={topGridStyle}>

          <h1 className='contact__title'>Contact</h1>

          {mappedContactItems}

    </motion.div>
  )
}