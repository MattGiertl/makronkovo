import React from 'react';
import styled from '@emotion/styled';

const StyledAnchor = styled.a({
  textDecoration: 'none',
  cursor: 'pointer',
});

const Image = styled.img(
  {
    height: '20px',
    width: '16px',
    verticalAlign: 'bottom',
  },
  props => ({
    marginRight: props.marginRight,
  }),
);

const SocialButton = ({ marginRight, src, to }) => (
  <StyledAnchor target="_blank" href={to}>
    <Image src={src} marginRight={marginRight} />
  </StyledAnchor>
);

export default SocialButton;
