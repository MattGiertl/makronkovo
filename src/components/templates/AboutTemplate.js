import React from 'react';
import NavBar from '../organisms/NavBar/Navbar';
import Heading from '../atoms/Heading';
import Fountain from '../atoms/Fountain';
import styled from '@emotion/styled';
import Card from '../atoms/Card';
import CardsContent from '../../data/about.json';
import { tabletQuery, mobileQuery, tabletLandscapeQuery } from '../../utils/mediaqueries';
import Footer from '../molecules/Footer';

const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '45px 455px 55px',

  [mobileQuery]: {
    margin: '0 43px 0 37px',
  },

  [tabletQuery]: {
    margin: '0 43px 0 37px',
  },

  [tabletLandscapeQuery]: {
    margin: '0 29.17%',
  },
});

const AboutTemplate = () => {
  const renderFirstCard = () => {
    const { firstCard } = CardsContent.cards;
    return (
      <Card
        image={firstCard.image}
        imageName={firstCard.imageName}
        heading={firstCard.heading}
        paragraph={firstCard.paragraph}
        boldHeading="bold"
      />
    );
  };

  const renderSecondCard = () => {
    const { secondCard } = CardsContent.cards;
    return (
      <Card
        image={secondCard.image}
        imageName={secondCard.imageName}
        heading={secondCard.heading}
        paragraph={secondCard.paragraph}
        boldParagraph="bold"
      />
    );
  };

  return (
    <>
      <NavBar />
      <ContentWrapper>
        <Heading>O NÁS</Heading>
        <Fountain />
        {renderFirstCard()}
        {renderSecondCard()}
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default AboutTemplate;
