import React from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';

const getHorizontalOffset = (left, width) => {
    return left + (width / 250);
};

const getVerticalOffset = (top, height) => {
    return top + height / 100 * 61.5;
};

const getHeight = (height) => {
    return height / 100 * 36.2;
};

const getWidth = (width) => {
    return width / 100 * 36.2;
};

const StyledWebCam = styled(Webcam)`
    left: ${props => getHorizontalOffset(props.left, props.width) + "px"};
    top: ${props => getVerticalOffset(props.top, props.height) + "px"};
    height: ${props => getHeight(props.height) + "px"};
    width: ${props => getWidth(props.width) + "px"};
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
