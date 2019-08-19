import React from 'react';

import styled from '@emotion/styled';
import { Link } from 'gatsby';
import theme from '../../utils/theme/theme';
import { mobileQuery, tabletQuery } from '../../utils/mediaqueries';

const StyledLink = styled(Link)(
  {
    textDecoration: 'none',
    color: theme.colors.mediumGold,
    fontSize: theme.fontSizes.small,
    fontFamily: theme.fontFamilies.caslonAntique.regular,
    transition: 'color 300ms',

    [mobileQuery]: {
      fontSize: theme.fontSizes.medium,
      marginBottom: '17px',
    },

    [tabletQuery]: {
      fontSize: theme.fontSizes.medium,
      marginBottom: '25px',
    },

    '&:active': {
      color: theme.colors.mediumPink,
    },

    '&:hover': {
      color: theme.colors.mediumPink,
    },
  },
  props => ({
    [mobileQuery]: {
      marginTop: props.marginTop,
    },

    [tabletQuery]: {
      marginTop: props.marginTop,
    },
  }),
);

const NavLink = ({ marginTop, children, to, ...rest }) => (
  <StyledLink marginTop={marginTop} to={to} {...rest}>
    {children}
  </StyledLink>
);

export default NavLink;
