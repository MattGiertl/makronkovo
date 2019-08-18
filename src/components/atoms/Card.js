import React from 'react';
import Image from './Image';
import Paragraph from './Paragraph';
import styled from '@emotion/styled';
import { tabletQuery, mobileQuery, laptopQuery, desktopQuery } from '../../utils/mediaqueries';

const StyledDiv = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [mobileQuery]: {
    height: '536px',
    width: '100%',
    margin: '0 5%',
  },

  [tabletQuery]: {
    height: '536px',
    width: '800px',
    margin: '32px',
  },

  [laptopQuery]: {
    height: '347px',
    width: '1010px',
    margin: '29px',
  },

  [desktopQuery]: {
    height: '200px',
    width: '1010px',
    margin: '29px',
  },
});

const ContentWrapper = styled.div(
  {
    display: 'flex',
    width: '100%',
    height: '100%',
    [mobileQuery]: {
      flexDirection: 'column',
      margin: '35px 20px',
    },

    [tabletQuery]: {
      flexDirection: 'column',
      margin: '35px 106px',
    },

    [laptopQuery]: {
      margin: '35px 106px',
    },

    [desktopQuery]: {
      margin: '35px 106px',
    }
  });

const TextWrapper = styled.div(
  {
    margin: "50px 10px 50px 0"
  },
  props => ({
    order: props.order,
  }),
);

const Card = ({
  image,
  imageName,
  heading,
  paragraph,
  boldHeading,
  boldParagraph,
  marginBottomHeading,
  marginBottomParagraph,
  order,
}) => (
  <StyledDiv>
    <ContentWrapper>
      <Image src={image} height="100%" width="40%" alt={imageName} marginRight="10%" mobileWidth="100%" tabletWidth="100%" />
      <TextWrapper order={order}>
        <Paragraph bold={boldHeading} marginBottom={marginBottomHeading}>
          {heading}
        </Paragraph>
        <Paragraph bold={boldParagraph} marginBottom={marginBottomParagraph}>
          {paragraph}
        </Paragraph>
      </TextWrapper>
    </ContentWrapper>
  </StyledDiv>
);

export default Card;
