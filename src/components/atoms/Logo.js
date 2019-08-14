import React from 'react'

import styled from '@emotion/styled';
import LogoImg from '../../../static/logo.png';

import {
  desktopQuery,
  laptopQuery,
  mobileQuery,
  tabletQuery,
} from '../../utils/mediaqueries';

const StyledLogo = styled.img(
  {
    [mobileQuery]: {
      display: 'flex',
      margin: '0 auto',
      marginTop: '30px',
      width: '180px',
    },

    [tabletQuery]: {
      display: 'flex',
      margin: '0 auto',
      marginTop: '50px',
    },

    [laptopQuery]: {
      margin: '0 50px',
    },

    [desktopQuery]: {
      margin: '0 116px',
    },
  },
  props => ({
    [mobileQuery]: {
      display: props.showLogo ? 'none' : 'block',
    },

    [tabletQuery]: {
      display: props.showLogo ? 'none' : 'block',
    },

    [laptopQuery]: {
      display: props.showLogo ? 'block' : 'none',
    },

    [desktopQuery]: {
      display: props.showLogo ? 'block' : 'none',
    },
  }),
);

const Logo = ({ show }) => (
  <StyledLogo showLogo={show} src={LogoImg} alt="Makronkovo logo" />
);

export default Logo;
