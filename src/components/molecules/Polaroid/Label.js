import React from 'react';
import styled from '@emotion/styled';
import theme from '../../../utils/theme/theme';

const Label = styled.label(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '117px',
    height: '40px',
    color: theme.colors.white,
    fontFamily: theme.fontFamilies.caslonAntique.regular,
    fontSize: theme.fontSizes.small,
  },
  props => ({
    background: props.background,
    top: props.top,
  }),
);

const PolaroidLabel = ({ isDiscount, isSeasonal, isSet }) => {
  let backgroundColor = '';
  let text = '';
  let top = '';

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

  const getTop = () => {
    if (isDiscount) {
      top = '25px';
    }

    if (isSeasonal) {
      top = '70px';
    }

    if (isSet) {
      top = '25px';
    }

    return top;
  };

  return (
    <Label background={getBackgroundColor()} top={getTop()}>
      {getText()}
    </Label>
  );
};

export default PolaroidLabel;
