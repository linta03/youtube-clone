import React, {  useState } from 'react'
import { useDispatch } from 'react-redux';
import { API_KEY } from '../config';
import { handleVideo } from '../store/slices/categorySlice';
import "../styles/categories.css"

const Categories = () => {
  const [activeElement, setactiveElement] = useState("All");
  const [categories, setcategories] = useState([])
  const dispatch = useDispatch();

    
    const keywords = [
        "All",
        "Entertainment",
        "Javascript",
        "Css",
        "Html",
        "Next.js",
        "Node",
        "help",
        "express",
        "Programming",
        "Algorithm",
        "Songs",
        "Daramas",
        "Serials",
        "Movies",
        "Seasons",
      ];
      const getCategories =async (val)=>{

        const api = `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&part=snippet&regionCode=Pk&q=${val}&key=${API_KEY}`
        try {
          const response = await fetch(api);
          const data = await response.json();
          // console.log(data?.items);
          setcategories(data?.items);
          dispatch(handleVideo(data?.items));
          
    
      } catch (err) {
          console.error(err);
      }
      }
      const handleClick = (val) => {
        setactiveElement(val);
        getCategories(val)
      };
     
      
      
      
      return (
        <>
          <div className="categoriesBar">
            {keywords.map((val, i) => (
              <span
              id='categories_span'
              key={i} 
              onClick={() => handleClick(val)}
              className={activeElement === val? "active":""}
              >
              {val}
              </span>
            ))}
          </div>
        </>
      );
}

export default Categories
