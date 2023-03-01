import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../config'
import "../../styles/relatedVideos.css"

const RelatedVideos = ({id}) => { 
  const [relatedvideos, setrelatedvideos] = useState([])



  const fetchRelatedvideos =async()=>{
    const api =`https://www.googleapis.com/youtube/v3/search?maxResults=20&part=snippet&relatedToVideoId=${id}&type=video&key=${API_KEY}`
    try {
      const response = await fetch(api);
      const data = await response.json();
     console.log(data);
     setrelatedvideos(data?.items);
    


    } catch (err) {
      console.error(err);
    }
  }


  useEffect(() => {
    
    fetchRelatedvideos();
  }, [])
  

  return (
    <div className='Related_videos'>
      {
        relatedvideos.map((video)=>(
          <div className="relatedVideoCard" key={video.id.videoId}>
          <div className="thumbNail_relatedVideo">
              <img src={video?.snippet?.thumbnails?.high?.url} alt="" height={124} width={147}/>
          </div>
          <div className="video_detail">
              <div className='video_title'>
  <p className="related_title">{video?.snippet?.title}</p>
              </div>
              <div className="channelName">
              {video?.snippet?.channelTitle}
              </div>
              <div className="small">
              {moment(video?.snippet?.publishedAt).fromNow()}
              </div>
             
          </div>
        </div>
        ))
      }
   
    </div>
  )
}

export default RelatedVideos


// https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=4uoZEaLMxBc&type=video&key=AIzaSyBRSf0-k9RaQ-gepxAAEJiaMN2RNIeRkP4



