import React from 'react';
import Heading from '../components/molecules/FountainHeading';
import Layout from '../components/organisms/Layout/Layout';
import Card from '../components/molecules/Card'
import CardsContent from '../data/about.json';
import styled from '@emotion/styled';
import theme from '../utils/theme/theme'


const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const AboutTemplate = () => {
    const renderFirstCard = () => {
        const {firstCard} = CardsContent.cards;
        return(
            <Card 
            image={firstCard.image}
            heading={firstCard.heading}
            paragraph={firstCard.paragraph}
            fontFamilyHeading={theme.fontFamilies.dinPro.bold}
            />
        )
    }

    const renderSecondCard = () => {
      const {secondCard} = CardsContent.cards;
      return(
          <Card 
          image={secondCard.image}
          heading={secondCard.heading}
          paragraph={secondCard.paragraph}
          fontFamilyParagraph={theme.fontFamilies.dinPro.bold}
          />
      )
  }
  return (
    <Layout>
      <Heading>O NÁS</Heading>
      <ContentWrapper>
      {renderFirstCard()}
      {renderSecondCard()}
      </ContentWrapper>
    </Layout>
  );
};

export default AboutTemplate;
