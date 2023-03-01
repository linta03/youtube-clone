import React, { useEffect, useState } from 'react'
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { API_KEY } from '../../config';
import "../../styles/comment.css"

const Comments = ({videoId}) => {
    console.log(videoId)
    const [comment, setcomment] = useState([])

    const VideoComments = async () => {
        const api = `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=100`;
        try {
          const response = await fetch(api);
          const data = await response.json();
            console.log(data?.items);
            setcomment(data?.items);
          // setVideoList(data?.items);
        } catch (err) {
          console.error(err);
        }
      };
    
      useEffect(() => {
        VideoComments();
      }, []);

  return (
    <div className='section_comment'>
      <div className="commentPart">
        {
            comment.map((comment)=>(
                <div className="comment">
                <div className="user_Detail">
                    {
                       comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl?   <img
                       src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
                       alt=""
                       height={30}
                       width={30}
                     />:   <img
                     src="https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png"
                     alt=""
                     height={30}
                     width={30}
                   />
                    }
             
                <p>{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
                </div>
                <div className="comment_text">
                    <p>{comment?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
                </div>
                <div className="Like_disLike">
                    <AiFillLike color='gray' size={20}/>
                    <AiFillDislike color='gray' size={20}/>
                </div>
            </div>
            ))
        }
       
        <hr />
      </div>
    </div>
  )
}

export default Comments


// GET https://youtube.googleapis.com/youtube/v3/comments?id=Ks-_Mh1QhMc&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

// https://www.googleapis.com/youtube/v3/commentThreads?key=******************&textFormat=plainText&part=snippet&videoId=kffacxfA7G4&maxResults=50

