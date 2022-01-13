import React from 'react'
import Background from './Components/Background.js'
import Home from './Components/Home.js'
import About from './Components/About.js'
import Portfolio from './Components/Portfolio.js'
import Contact from './Components/Contact.js'
import PagesWrapper from './Components/PagesWrapper.js'
import Grid from './Components/Grid.js'
import Navbar from './Components/Navbar.js'
import styles from './Styles/Styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {  

  // hook to get get current window dimensions
  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

  // resize handler to regenerate background tiles
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
  })
  
  function getTileDimensions() {
    const horizontalTiles = Math.round(dimensions.width / 50)
    const horizontalTileDim = Math.floor( dimensions.width / horizontalTiles * 100) / 100
    const verticalTiles = Math.round(dimensions.height / 50)
    const verticalTileDim = Math.floor( dimensions.height / verticalTiles * 100 ) / 100
    return [horizontalTiles, horizontalTileDim, verticalTiles, verticalTileDim]
  }

  const config = getTileDimensions()

  return (
    <>
      <Background key={'background'} />
      <PagesWrapper config={config} dimensions={dimensions} />
    </>
  );
}

export default App;