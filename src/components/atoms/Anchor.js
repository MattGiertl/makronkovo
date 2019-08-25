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
    [mobileQuery]: {
      fontSize: props.mobileFontSize ? props.mobileFontSize : theme.fontSizes.small,
      margin: props.mobileMargin,
    },

    [tabletQuery]: {
      fontSize: props.tabletFontSize ? props.tabletFontSize : theme.fontSizes.medium,
    },

    [laptopQuery]: {
      fontSize: props.laptopFontSize ? props.laptopFontSize : theme.fontSizes.medium,
    },

    [desktopQuery]: {
      fontSize: props.desktopFontSize ? props.desktopFontSize : theme.fontSizes.medium,
    },
  }),
);

const Anchor = ({
  href,
  children,
  fontFamily,
  mobileFontSize,
  tabletFontSize,
  laptopFontSize,
  desktopFontSize,
  mobileMargin,
}) => (
  <StyledAnchor
    href={href}
    fontFamily={fontFamily}
    mobileFontSize={mobileFontSize}
    tabletFontSize={tabletFontSize}
    laptopFontSize={laptopFontSize}
    desktopFontSize={desktopFontSize}
    mobileMargin={mobileMargin}
  >
    {children}
  </StyledAnchor>
);

export default Anchor;
