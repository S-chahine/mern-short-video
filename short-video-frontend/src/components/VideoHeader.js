import React from 'react';
import './VideoHeader.css';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';

const VideoHeader = ({ user }) => {
    return (
        <div className="videoHeader">
            <div className="videoHeader__avatar">
                <PersonIcon fontSize="large" />
            </div>
            <div className="videoHeader__info">
                <h3>{user}</h3>
                <button className="videoHeader__followButton">
                    <AddIcon />
                    Follow
                </button>
            </div>
        </div>
    );
};

export default VideoHeader;
