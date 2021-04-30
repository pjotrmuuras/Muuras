import React from 'react';
// import planter from '../../components/planter.mp4';
import planter from '../../../../components/planter.mp4';

const Video = () => {
    return (
        <div className='video-container'>
            <video src={planter} type='video/mp4' autoPlay loop muted playsInline style={{'max-width': '100%'}} />
        </div>
    )
}

export default Video
