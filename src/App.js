import React from 'react'
import Background from './Components/Background.js'
import Home from './Components/Home.js'
import Grid from './Components/Grid.js'
import styles from './App.css'

function App() {

  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

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
        <Home config={config}/>  
      </Grid>
    </>
  );
}

export default App;
