import React from 'react';
import Heading from '../components/molecules/FountainHeading';
import Layout from '../components/organisms/Layout/Layout';
import styled from '@emotion/styled';


const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const AboutTemplate = ({ cards }) => {
  return (
    <Layout>
      <Heading>O NÁS</Heading>
      <ContentWrapper>
      {cards}
      </ContentWrapper>
    </Layout>
  );
};

export default AboutTemplate;
