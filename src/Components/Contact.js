import React from 'react'
import { motion } from 'framer-motion'
import { animation } from '../Animations/divAnimation.js'
import getGridPosition from '../Functions/getGridPosition.js'
import { useNavigate } from 'react-router'


export default function Contact (props) {

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
    navigate('/')
  }

  function prev() {
    navigate('/portfolio')
  }

  const topGridStyle = {
    gridColumn: `${getGridPosition(props.config, 'small', 'colStart')} / ${getGridPosition(props.config, 'small', 'colEnd')}`,
    gridRow: `${getGridPosition(props.config, 'small', 'rowStart')} / ${getGridPosition(props.config, 'small', 'rowEnd')}`,
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

  const mappedContactItems = contactitems.map((item, index) => { 
    return (
      <div className='contact__item' key={index}>
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
        style={topGridStyle}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}>

          <h1 className='contact__title'>Contact</h1>

          {mappedContactItems}

    </motion.div>
  )
}