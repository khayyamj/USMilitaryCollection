import React from 'react'
import PropTypes from 'prop-types'
import './SideBar.scss'

class SideBar extends React.Component {

  render () {
    return (
      <div className='sidebar-content-container'>
        <aside className='featured-collections'>
          <h3>Featured Collections</h3>
          <a href='' className='aside-link-text'>U.S. World War II Army Enlistment Records</a><br />
          <a href='' className='aside-link-text'>U.S. Civil War Soldiers, 1861-1865</a><br />
          <a href='' className='aside-link-text'>WWII U.S. Navy Muster Rolls, 1938-1949</a> <br />
          <a href='' className='aside-link-text'>U.S. World War II Draft Registration Cards, 1942</a> <br />
          <a href='' className='aside-link-text'>World War I Draft Registration Cards</a> <br />
          <a href='' className='aside-link-text'>U.S. Marine Corp Muster Rolls, 1798-1958</a> <br />
          <button className='featured-collections-button'>SEE ALL COLLECTIONS</button>
        </aside>
        <aside className='discover-your-story'>
          <h3>Let us help you discover your story</h3>
          <p>Begin your free family tree with a few simple facts. We'll help you discover a lot more. Start your tree by subscribing today for a free trial.</p>
          <button
            className='featured-subscribe-button'
            onClick={this.props.openModal}
          >
            SUBSCRIBE TODAY
          </button>
        </aside>
      </div>
    )
  }
}

SideBar.propTypes = {
  openModal: PropTypes.func.isRequired
}

export default SideBar
