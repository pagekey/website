import React from 'react';

export default function YouTubePlayer(props) {
    const youtubeLink = props.youtubeLink;
    return (
        <iframe 
            className="youtube-video-player" 
            src={"https://www.youtube.com/embed/" + youtubeLink} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>
    );
}
