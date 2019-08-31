import React from 'react';
import styled from '@emotion/styled';
import Paragraph from '../atoms/Paragraph';
import theme from '../../utils/theme/theme';
import { mobileQuery, tabletQuery, desktopQuery, laptopQuery } from '../../utils/mediaqueries';
import UnorderedList from '../atoms/UnorderedList';

const TypeWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: '265px',
  [mobileQuery]: {
    margin: '0 20px 30px',
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

const ListItem = styled.li(
  {
    fontFamily: theme.fontFamilies.dinPro.regular,
    fontSize: theme.fontSizes.medium,
    color: theme.colors.mediumGold,
  },
  props => ({
    marginTop: props.marginTop,
  }),
);

const CakeType = ({ src, imgName, type, weight, height, portions, price }) => (
  <TypeWrapper>
    <img src={src} alt={imgName} />
    <Paragraph
      fontFamily={theme.fontFamilies.dinPro.bold}
      fontSize={theme.fontSizes.medium}
      marginTop="19px"
    >
      {type}
    </Paragraph>
    <UnorderedList listStyleType='none' alignItems='center' justifyContent='flex-end' paddingInlineStart='0'>
      <ListItem>{weight}</ListItem>
      <ListItem>{height}</ListItem>
      <ListItem>{portions}</ListItem>
      <ListItem marginTop="20px">{price}</ListItem>
    </UnorderedList>
  </TypeWrapper>
);

export default CakeType;
