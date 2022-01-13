import React from 'react'
import {motion} from 'framer-motion'

function getRandomValue(min, max) {
  return Math.floor( Math.random() * (max - min) + min )
}

export default function Tile ( {posX, posY, width, height} ) {

  const tile = getRandomValue(1, 21)

  let bg
  if (Math.random() > 0.01) {bg = `url(assets/pattern-${tile}.svg)`}
  else {bg = `hsl(0deg 90% 80%)`}
  

  const animation = {
    animate: {
      opacity: 1,
      scale: 1,
    },
    transition: {
      ease: 'easeInOut', 
      duration: 1, 
      delay: Math.random()*10,
      repeat: Infinity,
      repeatType: 'mirror',
      repeatDelay: getRandomValue(10, 60)
    }
  }



  const TileElement = () => {return(
    <motion.div
      // layout
      animate={animation.animate}
      transition={animation.transition}
      className="tile" 
      style={{ 
        background: bg,
        left: `${posX}px`, 
        top: `${posY}px`, 
        width: `${width}px`, 
        height: `${height}px`, 
        backgroundSize: `${width}px ${height}px`,
        backgroundRepeat: 'no-repeat',
        opacity: 0,
        scale: 0.8
      }}>
    </motion.div>
  )}

  return (
    <TileElement />
  )


}