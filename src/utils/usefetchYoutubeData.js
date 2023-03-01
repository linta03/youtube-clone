import { API_KEY } from "../config";
export const VideoResponse =async (setVideoList)=>{

    const api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=PK&key=${API_KEY}`
    try {
      const response = await fetch(api);
      const data = await response.json();
    //   console.log(data);
      setVideoList(data?.items);
      

  } catch (err) {
      console.error(err);
  }
  }