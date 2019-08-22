import React from 'react';
import styled from '@emotion/styled';

import '../../stylesheets/slideshow.css';

import Carousel from 'nuka-carousel';

const StyledCarousel = styled(Carousel)({
  width: '100% !important',
  height: '100% !important',
});

const SlideShow = ({ children }) => {
  return (
    <StyledCarousel
      autoplay
      swiping
      wrapAround
      dragging
      renderCenterLeftControls={() => null}
      renderCenterRightControls={() => null}
    >
      {children}
    </StyledCarousel>
  );
};

export default SlideShow;
