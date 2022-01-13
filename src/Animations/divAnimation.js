export const animation = [

  { // active state
    y: 0, 
    // scale: 1, 
    opacity: 1,
  }, 

  { // transition settings
    duration: 0.3, 
    ease: 'easeInOut',
  }, 

  { // initial state 
    y: -20, 
    // scale: 0.9, 
    opacity: 0,
  }, 
  { // exit (not-working)
    // scale: 0.9, 
    y: -20,
    opacity: 0,
  } 
]