import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const VideoFooter = ({ user, description, music }) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{user}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />
                    <p>{music}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoFooter;
