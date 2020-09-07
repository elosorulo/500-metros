import React from 'react';

import Video from './Video';
import video from '../assets/video.mp4';
import WebCamStream from './WebCamStream';
import VideoContainer from './VideoContainer';
import { CircularProgress } from '@material-ui/core';

const videoRef = React.createRef();

const Documentary = () => {
    const [hasLoaded, setLoaded] = React.useState(false);
    const [offsetTop, setOffsetTop] = React.useState(0);
    const [offsetLeft, setOffsetLeft] = React.useState(0);
    const [offsetWidth, setOffsetWidth] = React.useState(0);
    const [offsetHeight, setOffsetHeight] = React.useState(0);

    const handleResize = () => {
        if(videoRef.current) {
            const rect = videoRef.current.getBoundingClientRect();
            setOffsetTop(rect.top);
            setOffsetLeft(rect.left);
            setOffsetWidth(rect.width);
            setOffsetHeight(rect.height);
        }
    };

    
    React.useEffect(() => {
        window.addEventListener('resize', handleResize)
            
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[hasLoaded]);
    
    return (
        <div>
            {
                hasLoaded ?
                    <WebCamStream
                        top={offsetTop}
                        left={offsetLeft}
                        width={offsetWidth}
                        height={offsetHeight}
                    /> : <></>
                
                
            }
            <VideoContainer>
                {!hasLoaded ? <CircularProgress/> : <></>}
                <Video
                    ref={videoRef}
                    src={video}
                    autoPlay={true}
                    onLoadedData={() => {
                        window.setTimeout(() => handleResize(), 12500);
                        setLoaded(true);
                    }}
                    hasLoaded={hasLoaded}
                />
            </VideoContainer>
        </div>
        
    );
}

export default Documentary;
