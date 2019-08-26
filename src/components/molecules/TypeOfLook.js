import React from 'react';
import styled from '@emotion/styled';
import Paragraph from '../atoms/Paragraph';
import theme from '../../utils/theme/theme';

const HeadingDiv = styled.div({
  display: 'flex',
  marginTop: '43px',
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

const UnorderList = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingInlineStart: '300px',
  marginBlockEnd: '0px',
});

const TypeOfLook = ({ src, imgName, heading, point }) => (
  <>
    <HeadingDiv>
      <img src={src} alt={imgName} />
      <Paragraph
        fontFamily={theme.fontFamilies.dinPro.bold}
        fontSize={theme.fontSizes.medium}
        marginLeft="150px"
      >
        {heading}
      </Paragraph>
    </HeadingDiv>
    <UnorderList>
      <ListItem>{point}</ListItem>
    </UnorderList>
  </>
);

export default TypeOfLook;
