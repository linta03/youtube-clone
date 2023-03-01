import React from "react";
import "../../styles/search.css";
import { AiFillEye, AiFillLike, AiFillDislike } from "react-icons/ai";
import numeral from "numeral";
import Comments from "./Comments";

const VideoLoad = ({ id, items }) => {
  const source = `https://www.youtube.com/embed/${id}`;
//   console.log(channelId)

    // console.log(items[0]?.snippet?.title);

  return (
    <>
    <div className="iframe">
      <iframe
        width="95%"
        height="400"
        src={source}
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className="video_details_snippets">
        <p className="video_detail_title">{items[0].snippet.title}</p>
        <div className="second_part">
          <p className="video_detail_channel_name">
            <img
              src="https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png"
              alt=""
              height={30}
              width={30}
            />
            {items[0].snippet.channelTitle}
          </p>
          <div className="likes_dislike">
            <div className="like_button">
              <AiFillLike color="white" size={20} />
              {numeral(items[0].statistics.likeCount).format("0.a")}
              <div className="line"></div>
              <AiFillDislike color="white" size={20} />
            </div>
            {/* <AiFillEye  color="white" size={20}/>
            {numeral(items[0].statistics.viewCount).format("0.a")} */}
            <button className="subscribe">Subscribe</button>
          </div>
        </div>
        <div className="channel_detail_description">
        <p >
          {items[0].snippet.description?items[0].snippet.description:"NO DESCRIPTION"}
        </p>
        </div>
      </div>
    </div>
    <Comments videoId={id}/>
    </>
  );
};

export default VideoLoad;
