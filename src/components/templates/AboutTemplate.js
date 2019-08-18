import React from 'react';
import NavBar from '../organisms/NavBar/Navbar';
import Heading from '../atoms/Heading';
import Fountain from '../atoms/Fountain';
import styled from '@emotion/styled';
import Card from '../atoms/Card';
import CardsContent from '../../data/mock/about.json';
import Footer from '../molecules/Footer';

const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
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
        marginBottomHeading="25px"
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
        marginBottomHeading="25px"
        order={-1}
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
