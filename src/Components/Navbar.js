import React from 'react'
import { motion } from 'framer-motion'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Navbar ( {config} ) {

  const gridCol = [
    (window.innerWidth > 350) ? (Math.round(config[0]*0.25)+1) : 2,
    (window.innerWidth > 350) ? (Math.round(config[0]*0.75)+1) : config[0]
  ]

  const bottomGridStyle = {
    gridColumn: `${gridCol[0]} / ${gridCol[1]}`,
    gridRow: `${Math.round(config[2]*0.8)+2} / span 1`,
  }

  return (
    <div 
      className='nav glass'
      style={bottomGridStyle}
      >

        <Link to="/">
          <i className="navbar__icon fas fa-home"></i>
        </Link>

        <Link to="/about">
          <i className="navbar__icon fas fa-feather-alt"></i>
        </Link>

        <Link to="/portfolio">
          <i className="navbar__icon fas fa-shapes"></i>
        </Link>

        <Link to="/contact">
          <i className="navbar__icon fas fa-envelope-open"></i>
        </Link>
{/* 
        <Link to="/">
          <i class="fas fa-home"></i>
        </Link>

        <Link to="/">
          <i class="fas fa-home"></i>
        </Link>
        <a href='#'><i class="fas fa-feather-alt"></i></a>
        <a href='#'><i class="fas fa-shapes"></i></a>
        <a href='#'><i class="fas fa-envelope-open"></i></a> */}

    </div>
  )
}