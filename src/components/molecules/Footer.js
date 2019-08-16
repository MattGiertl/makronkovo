import React from 'react';
import styled from '@emotion/styled';
import theme from '../../utils/theme/theme';
import {
  mobileQuery,
  laptopQuery,
  desktopQuery,
} from '../../utils/mediaqueries';
import Paragraph from '../atoms/Paragraph';

const FooterBackground = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  background: theme.colors.lightPink,
  marginTop: 'auto',

  height: '50px',

  [mobileQuery]: {
    height: '95px',
  },

  [laptopQuery]: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  [desktopQuery]: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});

const Footer = () => (
  <FooterBackground>
    {/* TODO: Add Links */}
    <Paragraph fontSize={theme.fontSizes.small}>
      Newsletter - Spracovanie osobných údajov
    </Paragraph>
    <Paragraph fontSize={theme.fontSizes.small} mobileMarginTop="23px" bold>
      &copy; Makronkovo, 2019
    </Paragraph>
  </FooterBackground>
);

export default Footer;
