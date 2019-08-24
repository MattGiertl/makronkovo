import React from 'react';
import FountainHeading from '../components/molecules/FountainHeading';
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
      <FountainHeading margin="0 5px 15px">O NÁS</FountainHeading>
      <ContentWrapper>{cards}</ContentWrapper>
    </Layout>
  );
};

export default AboutTemplate;
