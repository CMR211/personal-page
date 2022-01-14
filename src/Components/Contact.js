import React from 'react'
import { motion } from 'framer-motion'
import { animation } from '../Animations/divAnimation.js'
import getGridPosition from '../Functions/getGridPosition.js'
import { useNavigate } from 'react-router'


export default function Contact (props) {



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
    props.changeCurrentPage(0)
  }

  function prev() {
    props.changeCurrentPage(2)
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
    return ( <>
      <div className='contact__item' key={index}>
        <i className={`${item.icon} contact__icon`}></i>
        <a className='contact__link' href={item.link}>{item.name}</a>
      </div>
      </> )
  })

  return (
    <motion.div 
        key='contact-div'
        animate={animation[0]}
        transition={animation[1]}
        initial={animation[2]}
        exit={animation[3]}
        className='contact glass'  

        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}>

          <h1 className='contact__title'>Contact</h1>

          <div className='contact__columns'>

            <div className='contact__container'>
              {mappedContactItems}
            </div>

            <div className='contact__form'>
              <form name="contact" method="POST" data-netlify="true">
                <div className='contact__form__item'>
                  <label className='contact__form__label' for="name">Name:</label>
                  <input autocomplete='hidden' className='contact__form__input' type="text" id="name" name="name" required/>
                </div>
                <div className='contact__form__item'>
                  <label className='contact__form__label' for="email">Email:</label>
                  <input autocomplete='hidden' className='contact__form__input' type="email" id="email" name="email" required />
                </div>
                <div className='contact__form__item'>
                  <label className='contact__form__label' for="message">Let me know what you think: </label>
                  <textarea className='contact__form__input' id="message" name="message" required ></textarea>
                </div>
                <div className='contact__form__item'>
                  <button className='contact__form__button' type="submit">Submit</button>
                </div>
              </form>
            </div>

          </div>
          

    </motion.div>
  )
}