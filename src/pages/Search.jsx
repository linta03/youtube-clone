import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../config";
import VideoLoad from "../components/videoDetails/VideoLoad";
import "../styles/search.css";
import RelatedVideos from "../components/videoDetails/RelatedVideos";

const Search = () => {
  const params = useParams();
  const { id } = params;
  const [videoDetail, setvideoDetail] = useState([]);

  const Videodetail = async () => {
    const api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`;
    try {
      const response = await fetch(api);
      const data = await response.json();
      //   console.log(data);
      // setVideoList(data?.items);
      setvideoDetail(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    Videodetail();
  }, []);
  // console.log(videoDetail);
  // console.log(id);

  return (
    <div className="search">
    <div className="videoLoader">
      {
        videoDetail.length===0?<div>hjhgj</div>:  <VideoLoad id={id} {...videoDetail} />
      }
    
    </div>
    <div className="related_videos">
    {
        videoDetail.length===0?<div>hjhgj</div>:   <RelatedVideos id={id}/>
      }
     
    </div>
    </div>
  );
};

export default Search;
