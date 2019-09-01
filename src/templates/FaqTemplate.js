import React from 'react';

import styled from '@emotion/styled';
import { tabletQuery, mobileQuery, tabletLandscapeQuery } from '../utils/mediaqueries';

import Layout from '../components/organisms/Layout/Layout';
import FountainHeading from '../components/molecules/FountainHeading';
import SEO from '../components/atoms/SEO';

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
      <SEO title="Časté Otázky | MAKRONKOVO - Cukrárska manufaktúra" />
      <ContentWrapper>
        <FountainHeading>ČASTÉ OTÁZKY</FountainHeading>
        {faqPairs}
      </ContentWrapper>
    </Layout>
  );
};

export default FaqTemplate;
