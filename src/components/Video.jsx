import React from 'react';
import styled from 'styled-components';

const Video = styled.video`
    visibility: ${props => props.hasLoaded ? "visible" : "hidden"};
    ${props =>
        !props.hasLoaded ?
            `   height: 0%;
                width: 0%;
            `
        :`
            max-width: 100%;
            max-height: 100%;
        `
    }
`;

export default Video;
