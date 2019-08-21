import React from 'react';
import Heading from '../molecules/FountainHeading';
import Layout from '../organisms/Layout';
import styled from '@emotion/styled';
import Card from '../atoms/Card';
import CardsContent from '../../data/mock/about.json';

const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.12)',
  margin: "20px 22%",
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
        mobileOrder={1}
        desktopOrder={-1}
      />
    );
  };

  return (
    <>
      <Layout>
        <Heading>O NÁS</Heading>
        <ContentWrapper>
          {renderFirstCard()}
          {renderSecondCard()}
        </ContentWrapper>
      </Layout>
    </>
  );
};

export default AboutTemplate;
