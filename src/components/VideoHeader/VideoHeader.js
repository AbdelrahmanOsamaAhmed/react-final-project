import React from "react";
import './VideoHeader.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
function VideoHeder(){

    return(
        <div className="video_header">
             
              <h3>Reels</h3>
              <CameraAltIcon className="cameraAltIcon"/>
        </div>
    )
}

export default VideoHeder

