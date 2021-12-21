import React from 'react'

export default function Grid (props) {

  const gridStyle = {
    display: `grid`,
    gridTemplateColumns: `repeat(${props.config[0]}, ${props.config[1]}px)`,
    gridTemplateRows: `repeat(${props.config[2]}, ${props.config[3]}px)`
  }

  return (
    <div className='grid' style={gridStyle}>
      {props.children}
    </div>
  )
}