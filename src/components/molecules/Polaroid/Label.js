import React from 'react';
import styled from '@emotion/styled';
import theme from '../../../utils/theme/theme';
import { mobileQuery } from '../../../utils/mediaqueries';

const Label = styled.label(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '117px',
    height: '40px',
    color: theme.colors.white,
    fontFamily: theme.fontFamilies.caslonAntique.regular,
    fontSize: theme.fontSizes.small,
    marginBottom: '5px',
    marginLeft: '-9px',

    [mobileQuery]: {
      width: '62px',
      height: '20px',
      fontSize: theme.fontSizes.xs,
    },
  },
  props => ({
    background: props.background,
    top: props.top,
  }),
);

const PolaroidLabel = ({ isDiscount, isSeasonal, isSet }) => {
  let backgroundColor = '';
  let text = '';

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

  return (
    <Label background={getBackgroundColor()}>
      {getText()}
    </Label>
  );
};

export default PolaroidLabel;
