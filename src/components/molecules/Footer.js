import React from 'react';
import styled from '@emotion/styled';
import theme from '../../utils/theme/theme';
import { mobileQuery, laptopQuery, desktopQuery, tabletQuery } from '../../utils/mediaqueries';
import Paragraph from '../atoms/Paragraph';

const FooterBackground = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  background: theme.colors.lightPink,
  marginTop: 'auto',
  position: 'absolute',
  bottom: 0,

  height: '50px',

  [mobileQuery]: {
    height: '95px',
    marginTop: '60px',
  },

  [tabletQuery]: {
    marginTop: '80px',
  },

  [laptopQuery]: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: '100px',
  },

  [desktopQuery]: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: '150px',
  },
});

const Footer = () => (
  <FooterBackground>
    {/* TODO: Add Links */}
    <Paragraph mobileMarginTop="16px" fontFamily={theme.fontFamilies.dinPro.regular}>
      &copy; Makronkovo, 2019
    </Paragraph>
    <Paragraph
      mobileMargin="auto 0 20px"
      fontFamily={theme.fontFamilies.dinPro.regular}
      fontSize={theme.fontSizes.small}
    >
      Newsletter - Spracovanie osobných údajov
    </Paragraph>
  </FooterBackground>
);

export default Footer;
