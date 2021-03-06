import React from 'react'
import Tile from './Tile.js'

function getRandomValue(min, max) {
  return Math.floor( Math.random() * (max - min) + min )
}

export default function Background () {

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
  }, [])
  
  function getTileDimensions() {
    const horizontalTiles = (Math.round(dimensions.width / 50) % 2 === 0) ? (Math.round(dimensions.width / 50) + 1) : (Math.round(dimensions.width / 50))
    const horizontalTileDim = Math.floor( dimensions.width / horizontalTiles * 100) / 100
    const verticalTiles = Math.round(dimensions.height / 50)
    const verticalTileDim = Math.floor( dimensions.height / verticalTiles * 100 ) / 100
    return [horizontalTiles, horizontalTileDim, verticalTiles, verticalTileDim]
  }
  
  function placeBackground() {
    const config = getTileDimensions()
    const array = []
    for (let i = 0; i <= config[0]; i++) {
      const row = []
      for (let j = 0; j <= config[2]; j++) {
        row.push( 
          <Tile 
          key={`${i}-${j}`}
          posX={ i * config[1] } 
          posY={ j * config[3] } 
          width={ config[1] }
          height={ config[3] }
          rnd={getRandomValue(1,21)}
          /> 
        )
      }
      array.push(row)
    }
    return array
  }

  return (
    <div id='background-tiles'>
      {placeBackground()}
    </div>
  )
}