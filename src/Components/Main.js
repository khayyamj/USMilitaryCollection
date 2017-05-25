import React from 'react'
import Body from './Body'
import SideBar from './SideBar'
import PropTypes from 'prop-types'
import './Main.scss'

const Main = (props) => {
  console.log('Main props: ', props)
  return (
    <div className='main-body-container'>
      <Body />
      <SideBar openModal={props.openModal} />
    </div>
  )
}

Main.propTypes = {
  // props: PropTypes.func,
  openModal: PropTypes.func.isRequired
}

export default Main
