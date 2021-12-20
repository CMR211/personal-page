import React from 'react'

function getRandomValue(min, max) {
  return Math.floor( Math.random() * (max - min) + min )
}

export default function Tile ( {posX, posY, width, height} ) {

  const tile = getRandomValue(1, 21)

  const rotation = getRandomValue(0,2) * 180
  const bg = `assets/pattern-${tile}.svg` 

  const TileElement = () => {return(
    <div
      className="tile" 
      style={{ 
        background: `url(${bg})`,
        left: `${posX}px`, 
        top: `${posY}px`, 
        width: `${width}px`, 
        height: `${height}px`, 
        backgroundSize: `${width}px ${height}px`,
        backgroundRepeat: 'no-repeat',
        transform: `rotate(${rotation}deg)`,
      }}>
    </div>
  )}

  return (
    <TileElement />
  )


}