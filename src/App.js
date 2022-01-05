import React from 'react'
import Background from './Components/Background.js'
import Home from './Components/Home.js'
import About from './Components/About.js'
import Portfolio from './Components/Portfolio.js'
import Contact from './Components/Contact.js'
import Grid from './Components/Grid.js'
import Navbar from './Components/Navbar.js'
import styles from './App.css'
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
      <Background />
      <Grid config={config}>
        <AnimatePresence>
        <BrowserRouter key={window.location.pathname}>
          
          <Routes>
            
              <Route key='home' path="/" element={
                <Home config={config} dimensions={dimensions} />
              } />

              <Route key='about' path="/about" element={
                <About config={config} dimensions={dimensions} />
              } />

              <Route key='portfolio' path="/portfolio" element={
                <Portfolio config={config} dimensions={dimensions} />
              } />

              <Route key='contact' path="/contact" element={
                <Contact config={config} dimensions={dimensions} />
              } />
            
          </Routes>

          <Navbar config={config} />

        </BrowserRouter>
        </AnimatePresence>
      </Grid>
    </>
  );
}

export default App;