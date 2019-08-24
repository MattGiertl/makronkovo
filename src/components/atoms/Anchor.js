import React from 'react';
import styled from '@emotion/styled';
import theme from '../../utils/theme/theme';
import { tabletQuery, mobileQuery, desktopQuery, laptopQuery } from '../../utils/mediaqueries';

const StyledAnchor = styled.a(
  {
    color: theme.colors.mediumGold,
    textDecoration: 'none',
  },
  props => ({
    fontFamily: props.fontFamily ? props.fontFamily : theme.fontFamilies.dinPro.regular,
    lineHeight: props.lineHeight,
    [mobileQuery]: {
      fontSize: props.fontSize ? props.fontSize : theme.fontSizes.small,
    },

    [tabletQuery]: {
      fontSize: props.fontSize ? props.fontSize : theme.fontSizes.medium,
    },

    [laptopQuery]: {
      fontSize: props.fontSize ? props.fontSize : theme.fontSizes.medium,
    },

    [desktopQuery]: {
      fontSize: props.fontSize ? props.fontSize : theme.fontSizes.medium,
    },
  }),
);

const Anchor = ({ href, children, fontFamily, lineHeight, fontSize }) => (
  <StyledAnchor href={href} fontFamily={fontFamily} lineHeight={lineHeight} fontSize={fontSize}>
    {children}
  </StyledAnchor>
);

export default Anchor;
