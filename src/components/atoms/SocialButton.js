import React from 'react';
import styled from '@emotion/styled';
import Mail from '../../../static/assets/Mail.svg';
import Telephone from '../../../static/assets/Telephone.svg';
import Facebook from '../../../static/assets/Facebook.svg';
import Instagram from '../../../static/assets/Instagram.svg';
import Location from '../../../static/assets/Location.svg';

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

const SocialButton = ({ marginRight, icon, to }) => {
  let src = '';
  if (icon === 'facebook') {
    src = Facebook;
  } else if (icon === 'instagram') {
    src = Instagram;
  } else if (icon === 'telephone') {
    src = Telephone;
  } else if (icon === 'mail') {
    src = Mail;
  } else if (icon === 'location') {
    src = Location;
  }

  return (
    <StyledAnchor target="_blank" href={to}>
      <Image src={src} marginRight={marginRight} />
    </StyledAnchor>
  );
};

export default SocialButton;
