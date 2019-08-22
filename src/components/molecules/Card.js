import React from 'react';
// import Image from './Image';
import Paragraph from '../atoms/Paragraph';
import styled from '@emotion/styled';
import { tabletQuery, mobileQuery, laptopQuery, desktopQuery } from '../../utils/mediaqueries';

const StyledDiv = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.12)',
  [mobileQuery]: {},
  [tabletQuery]: {},
  [laptopQuery]: {},
  [desktopQuery]: {
    margin: '31px 25%',
  },
});

const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [mobileQuery]: {},
  [tabletQuery]: {},
  [laptopQuery]: {},
  [desktopQuery]: {
    margin: '35px 15%',
  },
});

const TextWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [mobileQuery]: {},
  [tabletQuery]: {},
  [laptopQuery]: {},
  [desktopQuery]: {
    margin: '35px 15%',
  },
});

const Card = ({ image, imageName, heading, paragraph }) => (
  <StyledDiv>
    <ContentWrapper>
      <img src={image} alt={imageName} />
      <TextWrapper>
        <Paragraph margin="20px ">{heading}</Paragraph>
        <Paragraph>{paragraph}</Paragraph>
      </TextWrapper>
    </ContentWrapper>
  </StyledDiv>
);

export default Card;
