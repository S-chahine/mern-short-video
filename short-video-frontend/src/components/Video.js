import React, { useState, useRef } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import VideoHeader from './VideoHeader';

const Video = ({ url, channel, description, song, likes, shares, messages }) => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className="video">
            <VideoHeader user={channel} />
            <video
                src={url}
                className="video__player"
                loop
                ref={videoRef}
                onClick={handleVideoPress}
            />
            <VideoFooter user={channel} description={description} song={song} />
            <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    );
};

export default Video;
