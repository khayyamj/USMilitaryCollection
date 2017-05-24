import React from 'react'
import Body from './Body'
import SideBar from './SideBar'
import './Main.scss'

const Main = () => {
  return (
    <div className='main-body-container'>
      <Body />
      <SideBar />
    </div>
  )
}

export default Main
