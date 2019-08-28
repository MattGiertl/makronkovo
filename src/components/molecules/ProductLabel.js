import React from 'react';
import styled from '@emotion/styled';
import theme from '../../utils/theme/theme';
import { mobileQuery } from '../../utils/mediaqueries';

const LabelWrapper = styled.div(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '117px',
    height: '40px',
    fontFamily: theme.fontFamilies.caslonAntique.bold,
    fontSize: theme.fontSizes.small,
    color: theme.colors.white,

    [mobileQuery]: {
      margin: '8px 8px 0 0',
    },
  },
  props => ({
    backgroundColor: props.backgroundColor,
  }),
);

const ProductLabel = ({ isDiscount, isSeasonal, isSet }) => {
  let backgroundColor = '';

  const getBackgroundColor = () => {
    const { colors } = theme;

    if (isDiscount) {
      backgroundColor = colors.green;
    }

    if (isSeasonal) {
      backgroundColor = colors.mediumPink;
    }

    if (isSet) {
      backgroundColor = colors.darkGold;
    }

    return backgroundColor;
  };

  const getText = () => {
    let text = '';
    if (isDiscount) {
      text = 'AKCIA';
    }

    if (isSeasonal) {
      text = 'SEZÓNNE';
    }

    if (isSet) {
      text = 'SET';
    }

    return text;
  };

  return <LabelWrapper backgroundColor={getBackgroundColor()}>{getText()}</LabelWrapper>;
};

export default ProductLabel;
