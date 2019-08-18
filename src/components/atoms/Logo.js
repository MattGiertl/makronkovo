import React from 'react';

import styled from '@emotion/styled';
import LogoImg from '../../../static/logo.png';

import { desktopQuery, laptopQuery, mobileQuery, tabletQuery } from '../../utils/mediaqueries';

const StyledLogo = styled.img(
  {
    display: 'flex',

    [mobileQuery]: {
      margin: '30px auto 0',
      width: '180px',
    },

    [tabletQuery]: {
      margin: '30px auto 0',
      width: '200px',
    },
  },
  props => ({
    [mobileQuery]: {
      display: props.showLogo ? 'none' : 'block',
    },

    [tabletQuery]: {
      display: props.showLogo ? 'none' : 'block',
      width: '180px',
    },

    [laptopQuery]: {
      display: props.showLogo ? 'block' : 'none',
    },

    [desktopQuery]: {
      display: props.showLogo ? 'block' : 'none',
    },
  }),
);

const Logo = ({ show }) => <StyledLogo showLogo={show} src={LogoImg} alt="Makronkovo logo" />;

export default Logo;
