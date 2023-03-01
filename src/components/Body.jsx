import numeral from 'numeral'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../config'
import "../styles/body.css"
import { AiFillEye } from "react-icons/ai"
import moment from 'moment/moment'
import { useDispatch, useSelector } from 'react-redux'
import { handleVideo } from '../store/slices/categorySlice'
import { Link } from 'react-router-dom'

const Body = () => {
  const dispatch = useDispatch();
  const video = useSelector((store) => store.categories.video);

  const VideoResponse = async () => {

    const api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&pageToken=CAoQAA&regionCode=PK&key=${API_KEY}`
    try {
      const response = await fetch(api);
      const data = await response.json();
      //   console.log(data);
      // setVideoList(data?.items);
      dispatch(handleVideo(data?.items))


    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    VideoResponse();


  }, [])
//   console.log(video)
// console.log(video[0]?.id)



  return (
    <div className='body'>
    
        {
          video.map((video) => (
            <div className="card" key={video?.id}>
              <div className='thumbnail'>
                <img src={video?.snippet?.thumbnails?.medium?.url} height={140} width="100%" alt="" />
              </div>
              <div>
                <div className="video_details">
                  <img className='creater_profile_pic' src="https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png" height={20} width={20} alt="" />
                  <Link to={"/video/" + video?.id} style={{ textDecoration: 'none' }}>
                    <p className="title">
                      {video?.snippet?.title}
                    </p>
                  </Link>
                </div>
                <div className="channel_detail">
                  <p className="channel_name">
                    {video?.snippet?.channelTitle}
                  </p>
                  <p className='views'>
                    <AiFillEye />{numeral(video?.statistics?.viewCount).format("0.a")} Views •
                    {moment(video?.snippet?.publishedAt).fromNow()}
                  </p>
                </div>
              </div>
            </div>
          ))

        }

      {/* {
          video.map((video)=>(
            <div className="card" key={video?.id}>
            <div className='thumbnail'>
                  <img src={video?.snippet?.thumbnails?.medium?.url} height={140} width="100%" alt="" />
            </div>
            <div>
            <div className="video_details">
                    <img className='creater_profile_pic' src="https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png" height={20} width={20} alt="" />
                    <Link to={"/video/"+video?.id} style={{ textDecoration: 'none' }}>
                <p className="title">
                   {video?.snippet?.title}
                </p>
                </Link>
            </div>
            <div className="channel_detail">
            <p className="channel_name">
            {video?.snippet?.channelTitle}
                </p>
                <p className='views'>
                <AiFillEye />{numeral(video?.statistics?.viewCount).format("0.a")} Views •
              {moment(video?.snippet?.publishedAt).fromNow()}
                </p>
            </div>
            </div>
          </div>
          ))
              
        }
      */}
    </div>
  )
}

export default Body
