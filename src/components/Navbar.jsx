import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ setShowNavbar, ShowNavbar }) => {
  const [searchText, setsearchText] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSerachBox, setshowSerachBox] = useState(false)
  const handleToggleNavbar = () => {
    console.log(ShowNavbar);
    setShowNavbar(!ShowNavbar);
  };

  const fetchSearchSyggestions = async () => {
    const api = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchText}`;

    try {
      const response = await fetch(api);
      const data = await response.json();
      console.log(data[1]);
      setsuggestions(data[1])
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchSearchSyggestions();
  }, [searchText]);

  return (
    <div className="navbar">
      <div className="nav_icon">
        <RxHamburgerMenu color="white" size={30} onClick={handleToggleNavbar} />
      </div>
      <div className="Youtube_logo">
        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt=""
          height={30}
          width={50}
        />
      </div>
      <div className="search_input">
        <div className="search-sugges">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
          onFocus={()=>setshowSerachBox(true)}
          onBlur={()=>setshowSerachBox(false)}
        />

        <FaSearch color="white" size={20} className="Search_icon" />
        </div>
        {
         showSerachBox && 
        
        <div className="suggest-box">
          <div className="single_suggestion">
          {suggestions.map(suggestion=>(
            <div  className="key_suggestion" key={suggestion}>
               <FaSearch color="black" size={15} className="Search_icon" />{suggestion}
            </div>
          ))}
          </div>
        </div>
}
      </div>

      <div className="profile_photo">
        <img
          src="https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png"
          alt=""
          height={35}
          width={40}
        />
      </div>
    </div>
  );
};

export default Navbar;

// http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query
{
  /**

-set search value to state
-put that value to q of api
-fetch data from api in useEffect everytime search text changed
✅


*/
}
