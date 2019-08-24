import React from 'react';
import styled from '@emotion/styled';
import Paragraph from '../atoms/Paragraph';
import theme from '../../utils/theme/theme';
import { mobileQuery, tabletQuery, desktopQuery, laptopQuery } from '../../utils/mediaqueries';


const TypeWrapper = styled.div({
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
margin: '0 40px',
[mobileQuery]: {
    margin: '0 20px',
  },

  [tabletQuery]: {
    margin: '0 20px',

  },

  [laptopQuery]: {
    margin: '0 40px',
  },

  [desktopQuery]: {
    margin: '10px 50px',
  },
});

const CakeType = ({ src, imgName, type, weight, height, portions, price }) => (
<TypeWrapper>
    <img src={src} alt={imgName} />
    <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} marginTop='19px'>{type}</Paragraph>
    <Paragraph>{weight}</Paragraph>
    <Paragraph>{height}</Paragraph>
    <Paragraph>{portions}</Paragraph>
    <Paragraph marginTop='22px' mobileMargin='22px'>{price}</Paragraph>
</TypeWrapper>
);

export default CakeType;