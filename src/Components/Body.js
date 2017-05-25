import React from 'react'
import './Body.scss'

class Body extends React.Component {
  render () {
    return (
      <main className='main-content-container'>
        <h2>World conflicts. Personal stories.</h2>
        <p>Throughout history, millions of courageous men and women have served and protected their country in times of conflict. Were your ancestors among them? It's never beeneasier to find out on Ancestry.com, the world's largest online collection of family history resources, including millions of military records spanning from before the Revolutionary War all the way up to Vietnam.</p>
        <img src='../images/soldiers-World-War-II.jpg' className='main-body-image' />
        <p>Search through enlightening historical documents from every major U.S. war from the American Revolution through Vietnam, including draft registration cards, veteran's gravesites, soldier pension indexes, enlistment records, muster rolls and much more.</p>
        <button className='search-military-records'>SEARCH MILITARY RECORDS</button>
      </main>
    )
  }
}

export default Body
