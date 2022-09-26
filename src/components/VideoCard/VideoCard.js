import React, { useRef, useState } from "react";
import VideoFooter from "../VideoFooter/VideoFooter";
import VideoHeder from "../VideoHeader/VideoHeader";
import './VideoCard.css';

function VideoCard({channel,avatarSrc,song,url,likes,shares})
{

    const [isVideoPlaying,setIsVideoPlaying]=useState(false);
    const videoRef=useRef(null);
    const onVideoPress=()=>{
           if(isVideoPlaying)
           {
            videoRef.current.pause();
            setIsVideoPlaying(false);
           }
           else
           {
            videoRef.current.play();
            setIsVideoPlaying(true)
           }
    };
    return(
        <div className="video_card">
            <VideoHeder/>
         <video className="video_plyer"
         ref={videoRef}
         onClick={onVideoPress}
         src={url}
         alt="reel video"
         loop
         
         />
      <VideoFooter
        channel={channel}
         avatarSrc={avatarSrc}
         song={song}
         url={url}
         likes={likes}
    shares={shares}
         />

    </div> 
    )
}

export default VideoCard