import React from 'react';
import Image from './Image';
import Paragraph from './Paragraph';
import styled from '@emotion/styled';
import { tabletQuery, mobileQuery, laptopQuery, desktopQuery } from '../../utils/mediaqueries';

const StyledDiv = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.12)',
  [mobileQuery]: {
    height: '550px',
    width: '85%',
    margin: '20px 5%',
  },

  [tabletQuery]: {
    height: '536px',
    width: '700px',
    margin: '32px',
  },

  [laptopQuery]: {
    height: '347px',
    width: '1010px',
    margin: '29px',
  },

  [desktopQuery]: {
    height: '347px',
    width: '1010px',
    marginBottom: '25px',
  },
});

const ContentWrapper = styled.div({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'center',
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
  },
});

const TextWrapper = styled.div(
  {
    margin: '50px 10px 50px 0',
  },
  props => ({
    [mobileQuery]: {
      order: props.mobileOrder,
    },
    [tabletQuery]: {
      order: props.mobileOrder,
    },
    [laptopQuery]: {
      order: props.desktopOrder,
    },
    [desktopQuery]: {
      order: props.desktopOrder,
    },
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
  mobileOrder,
  desktopOrder,
}) => (
  <StyledDiv>
    <ContentWrapper>
      <Image
        src={image}
        height="70%"
        width="40%"
        alt={imageName}
        marginRight="10%"
        marginTop="35px"
        mobileWidth="80%"
        mobileHeight="30%"
        tabletWidth="80%"
      />
      <TextWrapper desktopOrder={desktopOrder} mobileOrder={mobileOrder}>
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
