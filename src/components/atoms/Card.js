import React from 'react';
import Image from './Image';
import Paragraph from './Paragraph';
import styled from '@emotion/styled';
import { tabletQuery, mobileQuery, laptopQuery, desktopQuery } from '../../utils/mediaqueries';

const StyledDiv = styled.div({
  display: 'flex',
  justifyContent: 'center',
  [mobileQuery]: {
    height: '536px',
    width: '414px',
    margin: '32px 20px 0',
  },

  [tabletQuery]: {
    height: '536px',
    width: '800px',
    margin: '32px 50px 0',
  },

  [laptopQuery]: {
    height: '347px',
    width: '1010px',
    margin: '29px auto',
  },

  [desktopQuery]: {
    height: '347px',
    width: '1010px',
    margin: '29px auto',
  },
});

const ContentWrapper = styled.div(
  {
    display: 'flex',
    width: "100%",
    height: "100%",
    [mobileQuery]: {
      flexDirection: 'column',
      margin: "35px 20px"
    },

    [tabletQuery]: {
      flexDirection: 'column',
      margin: "35px 106px"
    },

    [laptopQuery]: {
      margin: "35px 106px"
    },

    [desktopQuery]: {
      margin: "35px 106px"
    },
  }
);

const Card = ({
  image,
  imageName,
  heading,
  paragraph,
  boldHeading,
  boldParagraph,
}) => (
  <StyledDiv>
    <ContentWrapper>
      <Image image={image} height="100%" width="40%" imageName={imageName} marginRight="10%" />
      <div >
        <Paragraph bold={boldHeading}>{heading}</Paragraph>
        <Paragraph bold={boldParagraph}>{paragraph}</Paragraph>
      </div>
    </ContentWrapper>
  </StyledDiv>
);

export default Card;
