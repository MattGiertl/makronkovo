import React from 'react';
import styled from '@emotion/styled';
import theme from '../../utils/theme/theme';
import Paragraph from '../atoms/Paragraph';
import { mobileQuery, tabletToDesktopQuery } from '../../utils/mediaqueries';

const CardWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '130px',
  width: '130px',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.12)',

  [mobileQuery]: {
    marginBottom: '40px',
  },

  [tabletToDesktopQuery]: {
    marginRight: '40px',
  },
});

const SetCard = ({ size, amount, unitSize }) => {
  const { colors, fontSizes } = theme;

  return (
    <CardWrapper>
      <Paragraph color={colors.darkGold} fontSize={fontSizes.small}>
        {size}
      </Paragraph>
      <Paragraph color={colors.darkGold} fontSize={fontSizes.large}>
        {amount}
      </Paragraph>
      <Paragraph opacity="0.5" color={colors.darkGold} fontSize={fontSizes.small}>
        {unitSize}
      </Paragraph>
    </CardWrapper>
  );
};

export default SetCard;
