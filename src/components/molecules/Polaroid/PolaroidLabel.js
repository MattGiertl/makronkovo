import React from 'react';
import theme from '../../../utils/theme/theme';
import Label from './Label';

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