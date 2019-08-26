import React from 'react';
import styled from '@emotion/styled';
import Paragraph from '../atoms/Paragraph';
import theme from '../../utils/theme/theme';
import { tabletQuery, mobileQuery, laptopQuery, desktopQuery } from '../../utils/mediaqueries';

const OptionWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  [mobileQuery]: { margin: '0 5%' },
  [tabletQuery]: { margin: '0 10%', width: '80%' },
  [laptopQuery]: { marginLeft: '15%', width: '60%' },
  [desktopQuery]: { margin: '0 20%' },
});

const HeadingDiv = styled.div({
  display: 'flex',
  marginTop: '43px',
});

const ListWrapper = styled.div({
  display: 'flex',
  alignItems: 'left',
  [mobileQuery]: { marginLeft: '8%', marginBottom: '41px', width: '80%' },
  [tabletQuery]: { marginLeft: '30%', marginBottom: '41px', width: '60%' },
  [laptopQuery]: { marginLeft: '35%', width: '80%' },
  [desktopQuery]: { margin: '0 auto 41px 30%', width: '80%' },
});

const UnorderList = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  paddingInlineStart: 0,
  marginBlockEnd: 0,
});

const CakeView = ({ src, imgName, heading, children }) => (
  <OptionWrapper>
    <HeadingDiv>
      <img src={src} alt={imgName} />
      <Paragraph
        fontFamily={theme.fontFamilies.dinPro.bold}
        fontSize={theme.fontSizes.medium}
        mobileMargin="0 0 0 10%"
        tabletMargin="0 0 0 25%"
        laptopMargin="0 0 0 36%"
        desktopMargin="0 0 0 30%"
      >
        {heading}
      </Paragraph>
    </HeadingDiv>
    <ListWrapper>
      <UnorderList>{children}</UnorderList>
    </ListWrapper>
  </OptionWrapper>
);

export default CakeView;
