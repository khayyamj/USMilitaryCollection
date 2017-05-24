import React from 'react'
import Head from './Header'
import Main from './Main'
import Footer from './Footer'
import './ContentContainer.scss'

class ContentContainer extends React.Component {
  render () {
    return (
      <div className='usmilitary-collection-page-container'>
        <Head />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default ContentContainer
