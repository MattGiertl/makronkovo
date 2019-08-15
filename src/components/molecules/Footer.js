import React from 'react';
import styled from '@emotion/styled';
import theme from '../../utils/theme/theme';
import { mobileQuery } from '../../utils/mediaqueries';
import Paragraph from '../atoms/Paragraph';

const FooterBackground = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  background: theme.colors.lightPink,

  [mobileQuery]: {
    height: '95px',
  },
});

const Footer = () => (
  <FooterBackground>
    {/* TODO: Add Links */}
    <Paragraph>Newsletter - Spracovanie osobných údajov</Paragraph>
    <Paragraph mobileMarginTop="23px" bold>
      &copy; Makronkovo, 2019
    </Paragraph>
  </FooterBackground>
);

export default Footer;
