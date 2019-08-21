import React from 'react';
import FaqPair from '../molecules/FaqPair';
import styled from '@emotion/styled';
import FaqPairData from '../../data/mock/faq.json';
import { tabletQuery, mobileQuery, tabletLandscapeQuery } from '../../utils/mediaqueries';
import Layout from '../organisms/Layout/Layout';
import FountainHeading from '../molecules/FountainHeading';

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

const FaqTemplate = () => {
  const renderFaqPairs = FaqPairData.pairs.map(pair => {
    const { question, answer } = pair;
    return <FaqPair question={question} answer={answer} key={question} />;
  });

  return (
    <Layout>
      <ContentWrapper>
        <FountainHeading>ČASTÉ OTÁZKY</FountainHeading>
        {renderFaqPairs}
      </ContentWrapper>
    </Layout>
  );
};

export default FaqTemplate;
