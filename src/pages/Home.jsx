import React from 'react'
import "../App.css"
import Body from '../components/Body'


const Home = () => {
  return (
    <div>
      {/* <Navbar setShowNavbar={setShowNavbar} ShowNavbar={ShowNavbar}/>
      <Categories/>
      <Sidebar ShowNavbar={ShowNavbar}/> */}
      <div className='body'>
      <Body/>
      </div>
    </div>
  )
}

export default Home
