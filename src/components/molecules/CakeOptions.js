import React from 'react';
import styled from '@emotion/styled';
import Paragraph from '../atoms/Paragraph';
import theme from '../../utils/theme/theme';
import { tabletQuery, mobileQuery, laptopQuery, desktopQuery } from '../../utils/mediaqueries';
import UnorderedList from '../atoms/UnorderedList';

const OptionWrapper = styled.div({
  display: 'flex',
  [mobileQuery]: { margin: '0 5% 10px' },
  [tabletQuery]: { margin: '0 10% 10px', width: '80%' },
  [laptopQuery]: { margin: '0 18% 10px', width: '80%' },
  [desktopQuery]: { margin: '0 18% 10px' },
});

const TextWrapper = styled.div({
  display: 'flex',
  alignItems: 'left',
  flexDirection: 'column',
  [mobileQuery]: { marginLeft: '8%', marginBottom: '41px', width: '90%' },
  [tabletQuery]: { marginLeft: '0px', marginRight: 'auto', marginBottom: '41px', width: '60%' },
  [laptopQuery]: { marginLeft: '50px', marginBottom: '41px', width: '500px' },
  [desktopQuery]: { marginLeft: '50px', marginBottom: '41px', width: '500px'},
});

const Image = styled.img({
  height: '100%',
  weight: '100%',
  margin: '-10px auto auto',
});

const CakeView = ({ src, imgName, heading, children }) => (
  <OptionWrapper>
    <Image src={src} alt={imgName} />
    <TextWrapper>
      <Paragraph
        fontFamily={theme.fontFamilies.dinPro.bold}
        fontSize={theme.fontSizes.medium}
        textAlign="left"
        marginBottom="21px"
      >
        {heading}
      </Paragraph>
      <UnorderedList paddingInlineStart='20px' marginBlockStart='0' >{children}</UnorderedList>
    </TextWrapper>
  </OptionWrapper>
);

export default CakeView;
