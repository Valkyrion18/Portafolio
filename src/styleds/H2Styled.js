import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
width: 100vh;
height: fit-content;
font-family: 'Roboto', sans-serif;
font-weight: 300;
letter-spacing: 8px;
margin: 1em 0 1em 0;
color: #448AFF;
text-align: center;
`;

export const H2Styled = ({name}) => <StyledH2> {name} </StyledH2>