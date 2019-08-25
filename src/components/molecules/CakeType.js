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

const ListItem = styled.li({
  fontFamily: theme.fontFamilies.dinPro.regular,
  color: theme.colors.mediumGold,
})

const CakeType = ({ src, imgName, type, weight, height, portions, price }) => (
<TypeWrapper>
    <img src={src} alt={imgName} />
    <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} marginTop='19px'>{type}</Paragraph>
    <ul>
      <ListItem>{weight}</ListItem>
      <ListItem>{height}</ListItem>
      <ListItem>{portions}</ListItem>
      <ListItem>{price}</ListItem>
    </ul>
</TypeWrapper>
);

export default CakeType;