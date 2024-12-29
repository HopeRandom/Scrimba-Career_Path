import React from 'react'
import GlobeLogo from "../assets/globe.png"

function Header() {
  return (
      <header>
        <img className='logo' src={GlobeLogo} alt="globe icon" />
        <h1>my travel journal</h1>
      </header>
  )
}

export default Header
