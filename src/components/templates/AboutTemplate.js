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
        <ContentWrapper>
          <Heading>O NÁS</Heading>
          {renderFirstCard()}
          {renderSecondCard()}
        </ContentWrapper>
      </Layout>
    </>
  );
};

export default AboutTemplate;
