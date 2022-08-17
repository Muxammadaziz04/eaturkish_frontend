import React from 'react';

import poster from '../../../assets/Video__placeholder.png'

const VideoSection = () => {
    return (
        <iframe 
            style={{"aspectRatio": "16/9"}}
            width="100%" 
            src="https://www.youtube.com/embed/No3s_UfdeKc" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    );
}

export default VideoSection;
