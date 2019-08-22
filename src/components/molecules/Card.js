import React from 'react';
import Paragraph from '../atoms/Paragraph';
import styled from '@emotion/styled';
import { tabletQuery, mobileQuery, laptopQuery, desktopQuery } from '../../utils/mediaqueries';

const StyledDiv = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.12)',
  [mobileQuery]: { margin: '31px 10px' },
  [tabletQuery]: { margin: '31px 15% 40px' },
  [laptopQuery]: { margin: '31px 20% 40px' },
  [desktopQuery]: {
    margin: '31px 30% 40px',
  },
});

const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [mobileQuery]: { margin: '35px 55%' },
  [tabletQuery]: { margin: '35px 10%' },
  [laptopQuery]: { margin: '35px 10%' },
  [desktopQuery]: {
    margin: '35px 10%',
  },
});

const TextWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  [mobileQuery]: { margin: '39px 1%' },
  [tabletQuery]: { margin: '35px 1%' },
  [laptopQuery]: { margin: '35px 1%' },
  [desktopQuery]: {
    margin: '35px 1%',
  },
});

const Card = ({ image, imageName, heading, paragraph, fontFamilyHeading, fontFamilyParagraph }) => (
  <StyledDiv>
    <ContentWrapper>
      <img src={image} alt={imageName} />
      <TextWrapper>
        <Paragraph margin="20px 0" fontFamily={fontFamilyHeading}>
          {heading}
        </Paragraph>
        <Paragraph fontFamily={fontFamilyParagraph}>{paragraph}</Paragraph>
      </TextWrapper>
    </ContentWrapper>
  </StyledDiv>
);

export default Card;
