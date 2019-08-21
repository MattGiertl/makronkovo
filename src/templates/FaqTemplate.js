import React from 'react';

import styled from '@emotion/styled';
import { tabletQuery, mobileQuery, tabletLandscapeQuery } from '../utils/mediaqueries';

import Layout from '../components/organisms/Layout/Layout';
import FountainHeading from '../components/molecules/FountainHeading';

const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 29.17%',

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

const FaqTemplate = ({ faqPairs }) => {
  return (
    <Layout>
      <ContentWrapper>
        <FountainHeading>Časté otázky</FountainHeading>
        {faqPairs}
      </ContentWrapper>
    </Layout>
  );
};

export default FaqTemplate;
