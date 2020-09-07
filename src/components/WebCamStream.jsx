import React from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';

const StyledWebCam = styled(Webcam)`
    left: ${props => props.left + 5 + "px"};
    top: ${props => props.top + props.height / 10 * 6 + "px"};
    height: ${props => props.height / 10 * 3 + "px"};
    width: ${props => props.width / 10 * 3 + "px"};
    position: absolute;
`;

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

const WebCamStream = (props) => {

    const webCamRef = React.useRef();

    return (
        <StyledWebCam
            ref={webCamRef}
            audio={false}
            videoConstraints={videoConstraints}
            {...props}
        />
    );
};

export default WebCamStream;
