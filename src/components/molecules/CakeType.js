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
  fontSize: theme.fontSizes.medium,
  color: theme.colors.mediumGold,
},
props => ({
  marginTop: props.marginTop
})
);

const UnorderList = styled.ul({
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingInlineStart: "0px",
  marginBlockEnd: '0px'
});

const CakeType = ({ src, imgName, type, weight, height, portions, price }) => (
<TypeWrapper>
    <img src={src} alt={imgName} />
    <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} fontSize={theme.fontSizes.medium} marginTop='19px'>{type}</Paragraph>
    <UnorderList>
      <ListItem>{weight}</ListItem>
      <ListItem>{height}</ListItem>
      <ListItem>{portions}</ListItem>
      <ListItem marginTop="20px">{price}</ListItem>
    </UnorderList>
</TypeWrapper>
);

export default CakeType;