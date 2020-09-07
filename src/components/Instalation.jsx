import React from 'react';

import Video from './Video';
import video from '../assets/video.mp4';
import WebCamStream from './WebCamStream';
import VideoContainer from './VideoContainer';

const videoRef = React.createRef();

const Instalation = () => {
    
    const [offsetTop, setOffsetTop] = React.useState(0);
    const [offsetLeft, setOffsetLeft] = React.useState(0);
    const [offsetWidth, setOffsetWidth] = React.useState(1280);
    const [offsetHeight, setOffsetHeight] = React.useState(720);

    React.useEffect(() => {
        const handleResize = () => {
            if(videoRef.current) {
                setOffsetTop(videoRef.current.offsetTop);
                setOffsetLeft(videoRef.current.offsetLeft);
                setOffsetWidth(videoRef.current.offsetWidth);
                setOffsetHeight(videoRef.current.offsetHeight);
                console.log(videoRef.current.offsetTop);       
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize)
            
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[]);

    return (
        <div>
            <WebCamStream
                top={offsetTop}
                left={offsetLeft}
                width={offsetWidth}
                height={offsetHeight}
            />
            <VideoContainer>
                <Video ref={videoRef} src={video} autoPlay={true}/>
            </VideoContainer>
        </div>
    );
}

export default Instalation;
