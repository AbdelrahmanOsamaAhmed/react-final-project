import React from "react";
import './VideoFooter.css';
import { Avatar, Button } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import Ticker, { FinancialTicker, NewsTicker } from 'nice-react-ticker';
import MovingComponent from 'react-moving-text';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
function VideoFooter({ url, likes, shares,comments, channel, avatarSrc, song }) {


    return (
        <div className="Video_footer">
            <div className="video_footer_text">
                <Avatar src={avatarSrc} />
                <h4>{channel} . <Button>Follow</Button>
                </h4>
            </div>

            <div className="video_footer_ticker">

                <span className="">

                    <MovingComponent
                        type="fadeInFromLeft"
                        duration="2000ms"
                        delay="1s"
                        direction="normal"
                        timing="ease-in-out"
                        iteration="infinite"
                        fillMode="both">
                        <MusicNoteIcon className="video_footer_icon" />
                        {song}
                    </MovingComponent></span>

            </div>

            <div className="video_footer_actions">
                <div className="video_footer_actionsLeft">
                    <FavoriteIcon />
                    <ModeCommentIcon />
                    <SendIcon />
                    <MoreHorizIcon />
                </div>
                <div className="video_footer_actionsRight">
                    <div className="video_footer_stat">
                        <FavoriteIcon />
                        <p>{likes}</p>
                    </div>

                    <div className="video_footer_stat">
                        <ModeCommentIcon />
                        <p>{comments}</p>
                    </div>

                    <div className="video_footer_stat">
                        <ShareIcon />
                        <p>{shares}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VideoFooter