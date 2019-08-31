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

const SocialButton = ({ marginRight, facebook, instagram, telephone, mail, to }) => {
  const src = facebook
    ? Facebook
    : instagram
    ? Instagram
    : telephone
    ? Telephone
    : mail
    ? Mail
    : Location;
  return (
    <StyledAnchor target="_blank" href={to}>
      <Image src={src} marginRight={marginRight} />
    </StyledAnchor>
  );
};

export default SocialButton;
