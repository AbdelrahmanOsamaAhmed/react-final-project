import React from "react";
import "./Reels.css";
import { useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import { RiPlayList2Fill } from "react-icons/ri";

export default function Reels() {
  let [appReels, setAppReels] = useState([
    {
      id: "1",
      title: "Big Buck Bunny",
      author: "Vlc Media Player",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      likes: 60,
      comments: 50,
      shares: 70,
    },
    {
      id: "2",
      title: "For Bigger Escape",
      author: "T-Series Regional",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      likes: 150,
      comments: 40,
      shares: 70,
    },
    {
      id: "3",
      title: "The first Blender Open Movie from 2006",
      author: "Blender Inc.",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      likes: 150,
      comments: 88,
      shares: 60,
    },

    {
      id: "4",
      title: "Big Buck Bunny",
      author: "Vlc Media Player",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      likes: 50,
      comments: 90,
      shares: 80,
    },
    {
      id: "5",
      title: "For Bigger Blazes",
      author: "T-Series Regional",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      likes: 120,
      comments: 30,
      shares: 80,
    },
    {
      id: "6",
      title: "For Bigger Blazes",
      author: "T-Series Regional",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",

      likes: 90,
      comments: 60,
      shares: 70,
    },
    {
      id: "7",
      title: "For Bigger Escape",
      author: "T-Series Regional",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      likes: 80,
      comments: 70,
      shares: 50,
    },
    {
      id: "8",
      title: "The first Blender Open Movie from 2006",
      author: "Blender Inc.",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      likes: 50,
      comments: 33,
      shares: 70,
    },
  ]);

  return (
    <div className="reels">
      <div className="reel_top d-flex flex-col align-items-center ">
        <RiPlayList2Fill size={50} color="white" />
        <h1>Reels</h1>
      </div>

      <div className="reel_videos">
        {appReels.map((singleReel) => (
          <VideoCard
            channel={singleReel.title}
            avatarSrc="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg"
            song={singleReel.author}
            url={singleReel.videoUrl}
            likes={singleReel.likes}
            comments={singleReel.comments}
            shares={singleReel.shares}
          />
        ))}
      </div>
    </div>
  );
}
