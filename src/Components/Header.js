import React from 'react'
import './Header.scss'

const Head = () => {
  return (
    <header className='header-usmilitary'>
      <div className='header-link-history'>
        <p><a href=''>Home</a> <span>></span> <a href=''>Search</a> <span>></span> US Military Collection</p>
      </div>
      <div className='header-title'>
        <h1>U.S. Military Collection</h1>
      </div>
    </header>
  )
}

export default Head
