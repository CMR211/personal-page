import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar ( {config, changeCurrentPage, currentPage} ) {

  const navElements = [
    [0, 'fas fa-home', 'home'],
    [1, 'fas fa-feather-alt', 'about'],
    [2, 'fas fa-shapes', 'portfolio'],
    [3, 'fas fa-envelope-open', 'contact']
  ]
  
  const mappedNavElements = navElements.map((el) => { 
    return (
      // <div className='navbar__item'>
        <motion.i 
          style={{'--iconColor': (currentPage === el[0]) ? 'var(--accent)' : 'currentColor'}} 
          onClick={() => changeCurrentPage(el[0])} 
          whileTap={{scale: 0.1}} 
          whileHover={{scale:1.2}} 
          transition={{duration: 0.1, ease: 'easeInOut'}} 
          className={`navbar__icon ${el[1]}`}>
        </motion.i>
        // <p className='navbar__text'>{el[2]}</p>
      // </div>

    )
  })

  return (
    <div 
      className='navbar glass'
      >

          {mappedNavElements}

    </div>
  )
}