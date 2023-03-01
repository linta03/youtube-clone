import React from 'react'
import "../styles/navbar.css"
import {RxHamburgerMenu} from "react-icons/rx"
import {FaSearch} from "react-icons/fa"

const Navbar = ({setShowNavbar,ShowNavbar}) => {
  const handleToggleNavbar =()=>{
    console.log(ShowNavbar)
           setShowNavbar(!ShowNavbar)

  }
  return (
    <div className='navbar'>
      <div className="nav_icon">
        <RxHamburgerMenu color='white' size={30} onClick={handleToggleNavbar}/>
      </div>
      <div className='Youtube_logo'>
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" height={30} width={50} />
      </div>
      <div className="search_input">
        <input type="text" placeholder='Search' />
        <FaSearch color='white' size={20} className="Search_icon"/>
      </div>
      <div className="profile_photo">
        <img src="https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png" alt="" height={35} width={40}/>
      </div>
    </div>
  )
}

export default Navbar
