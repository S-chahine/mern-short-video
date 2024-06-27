import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

const VideoSidebar = ({ likes, comments, shares }) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                <FavoriteIcon
                    fontSize="large"
                    onClick={() => setLiked(!liked)}
                    style={{ color: liked ? 'red' : 'white' }}
                />
                <p>{liked ? +likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <CommentIcon fontSize="large" />
                <p>{comments}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    );
};

export default VideoSidebar;
