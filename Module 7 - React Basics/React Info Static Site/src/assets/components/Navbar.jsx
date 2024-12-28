import React from 'react'
import ReactLogoSmall from "../images/react-icon-small.png"

function Navbar() {
  return (
      <header>
        <nav>
            <img src={ReactLogoSmall} alt='React logo' />
            <h3>ReactFacts</h3>
        </nav>
      </header>
  )
}

export default Navbar