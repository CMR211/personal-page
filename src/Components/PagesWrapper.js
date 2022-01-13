import React from 'react'
import Home from './Home.js'
import About from './About.js'
import Portfolio from './Portfolio.js'
import Contact from './Contact.js'
import Navbar from './Navbar.js'
import { AnimatePresence } from 'framer-motion'

export default function PagesWrapper( {config, dimensions}) {  

  const [currentPage, setCurrentPage] = React.useState(0)

  function changeCurrentPage (page) {
    setCurrentPage(page)
  }

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {currentPage === 0 && <Home key={0} config={config} dimensions={dimensions} changeCurrentPage={changeCurrentPage} />}
        {currentPage === 1 && <About key={1} config={config} dimensions={dimensions} changeCurrentPage={changeCurrentPage} />}
        {currentPage === 2 && <Portfolio key={2} config={config} dimensions={dimensions} changeCurrentPage={changeCurrentPage} />}
        {currentPage === 3 && <Contact key={3} config={config} dimensions={dimensions} changeCurrentPage={changeCurrentPage} />}
      </AnimatePresence>
      <Navbar config={config} changeCurrentPage={changeCurrentPage} currentPage={currentPage} />
    </>
    
  )
}