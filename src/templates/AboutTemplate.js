import React from 'react';
import Heading from '../components/molecules/FountainHeading';
import Layout from '../components/organisms/Layout/Layout';
import Card from '../components/molecules/Card'
import CardsContent from '../data/about.json';
// import styled from '@emotion/styled';

// const ContentWrapper = styled.div({
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.12)',
//   margin: "20px 22%",
// });

const AboutTemplate = () => {
    const renderFirstCard = () => {
        const {firstCard} = CardsContent.cards;
        return(
            <Card 
            image={firstCard.image}
            heading={firstCard.heading}
            paragraph={firstCard.paragraph}
            />
        )
    }
  return (
    <Layout>
      <Heading>O NÁS</Heading>
      {renderFirstCard()}
    </Layout>
  );
};

export default AboutTemplate;
