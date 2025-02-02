import React from 'react';
import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const LoadingContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: nowrap;
`;

const Item = styled.div`
  width: 20%;
  height: 20%;
  border-radius: 50%;
  background: ${props => props.color || '#00adb5'};
  animation: ${animate} ${props => props.speed || 0.8}s ease-in-out alternate infinite;
`;

const ItemFirst = styled(Item)`
  animation-delay: -${props => props.speed / 2 || 0.4}s;
`;

const ItemTwo = styled(Item)`
  animation-delay:  -${props => props.speed / 4 || 0.2}s;
`;

const Disappearedloading = ({ style, color, speed }) => {
  return (
    <LoadingContainer style={style}>
      <ItemFirst color={color} speed={speed} />
      <ItemTwo color={color} speed={speed} />
      <Item color={color} speed={speed} />
    </LoadingContainer>
  );
};

export default Disappearedloading;
