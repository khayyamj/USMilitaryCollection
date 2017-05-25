import React from 'react'
import PropTypes from 'prop-types'
import Head from './Header'
import Main from './Main'
import Footer from './Footer'
import SubscribeModal from './SubscribeModal'

import './ContentContainer.scss'

class ContentContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      showModal: false
    }
    this.displayModal = this.displayModal.bind(this)
  }

  displayModal () {
    console.log('Toggle Modal', this.state.showModal)
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    console.log('Show Modal:', this.state.showModal)
    return (
      <div className='usmilitary-collection-page-container'>
        <Head />
        <Main openModal={this.displayModal} />
        <Footer />
        {this.state.showModal ? <SubscribeModal closeModal={this.displayModal} /> : null}
      </div>
    )
  }
}

ContentContainer.propTypes = {
  openModal: PropTypes.func,
  showModal: PropTypes.bool
}

export default ContentContainer
