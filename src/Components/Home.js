import React from 'react'

export default function Home (props) {

  const gridStyle = {
    gridColumn: `${Math.round(props.config[0]*0.25)+1} / ${Math.round(props.config[0]*0.75)+1}`,
    gridRow: `${Math.round(props.config[2]*0.2)+1} / ${Math.round(props.config[2]*0.8)+1}`,
  }

  return (
    <>
      <div className='home' style={gridStyle}>

        <div className='home__content'>

          <h1 className='home__title'>
            Hello, my name is<br />
            <span className='accent'>Bartosz Surma</span>
          </h1>

          <p className='home__subtitle'>
            {`And I'm an aspiring frontend developer :)`}
          </p>

        </div>

      </div>
    </>
  )
}