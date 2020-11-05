import React from 'react';
import Lottie from 'react-lottie';
import animationData from './animation.json';

import { Container } from './styles';

function Loading() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Container>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={false}
        isPaused={false}
      />
    </Container>
  )
}

export default Loading;
