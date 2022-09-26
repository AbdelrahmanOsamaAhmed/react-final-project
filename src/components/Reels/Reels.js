import React from "react";
import './Reels.css';
import { useState } from "react";
import VideoCard from "../VideoCard/VideoCard";


export default function Reels() {
    let [appReels, setAppReels] = useState(
        [
            {
                "id": "1",
                "title": "Big Buck Bunny",
                "author": "Vlc Media Player",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                "likes":60,
                "shares":70

            },
            {
                "id": "2",
                "title": "The first Blender Open Movie from 2006",
                "author": "Blender Inc.",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                "likes":150,
                "shares":60

            },
            {
                "id": "3",
                "title": "For Bigger Blazes", 
                "author": "T-Series Regional",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",  
                "likes":120,
                "shares":80

            },
            {
                "id": "4",
                "title": "For Bigger Escape", 
                "author": "T-Series Regional",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", 
                "likes":150,
                "shares":70

            },
            {
                "id": "5",
                "title": "Big Buck Bunny",
                "author": "Vlc Media Player",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                "likes":50,
                "shares":80

            },
            {
                "id": "6",
                "title": "For Bigger Blazes",
                "author": "T-Series Regional",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                "likes":90,
                "shares":70

            },
            {
                "id": "7",
                "title": "For Bigger Escape",
                "author": "T-Series Regional",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                "likes":80,
                "shares":50

            },
            {
                "id": "8",
                "title": "The first Blender Open Movie from 2006",
                "author": "Blender Inc.",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                "likes":50,
                "shares":70

            }
        ]
    )

    return (
        <div className="reels">
           <div className="reel_top">
            <img className="reel_logo"
            src="" alt="logo"/ >
            <h1>Reels</h1>
           </div>

           <div className="reel_videos">
         {
            appReels.map((singleReel)=>(
                <VideoCard 
                channel={singleReel.title}
                avatarSrc=""
                song={singleReel.author}
                url={singleReel.videoUrl}
                likes={singleReel.likes}
                shares={singleReel.shares}/>
            ))
           
         }

            

           
</div>
        </div>
    )
}