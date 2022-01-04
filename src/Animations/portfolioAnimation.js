export const portfolioAnimation = [

  { // active state
    opacity: 1,
    y: 0,
  }, 

  { // transition settings
    duration: 0.3, 
    ease: 'easeInOut',
  }, 

  { // initial state 
    opacity: 0,
    y: -20,
  }, 
  { // exit

    opacity: 0,
    y: 20,
  } 
]