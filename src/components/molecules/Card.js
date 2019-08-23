import React from 'react';
import Paragraph from '../atoms/Paragraph';
import styled from '@emotion/styled';
import Image from '../atoms/Drawing';
import { tabletQuery, mobileQuery, laptopQuery, desktopQuery } from '../../utils/mediaqueries';

const StyledDiv = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [mobileQuery]: { margin: '0 20px 30px' },
    [tabletQuery]: { margin: '31px 15% 40px' },
    [laptopQuery]: { margin: '0 20% 30px' },
    [desktopQuery]: {
      margin: '0 30% 30px',
    },
  },
  props => ({
    boxShadow: props.boxShadow,
  }),
);

const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [mobileQuery]: { margin: '10px 10% 10px' },
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
  [mobileQuery]: { margin: '5px 1%' },
  [tabletQuery]: { margin: '35px 1%' },
  [laptopQuery]: { margin: '35px 1%' },
  [desktopQuery]: {
    margin: '35px 1%',
  },
});

const Card = ({
  image,
  imageName,
  heading,
  paragraph,
  fontFamilyHeading,
  fontFamilyParagraph,
  boxShadow,
}) => (
  <StyledDiv boxShadow={boxShadow}>
    <ContentWrapper>
      <Image src={image} alt={imageName} />
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
