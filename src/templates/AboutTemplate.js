import React from 'react';
import Heading from '../components/molecules/FountainHeading';
import Layout from '../components/organisms/Layout/Layout';
import styled from '@emotion/styled';
import { tabletQuery } from '../utils/mediaqueries';

const ContentWrapper = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  props => ({
    [tabletQuery]: {
      marginBottom: '100px',
    },
  }),
);

const AboutTemplate = ({ cards }) => {
  return (
    <Layout>
      <Heading margin="0 5px 15px">O NÁS</Heading>
      <ContentWrapper>{cards}</ContentWrapper>
    </Layout>
  );
};

export default AboutTemplate;
