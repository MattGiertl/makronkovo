import React from 'react';
import Heading from '../atoms/Heading';
import Fountain from '../atoms/Fountain';
import FaqPair from '../molecules/FaqPair';
import styled from '@emotion/styled';
import FaqPairData from '../../data/faq.json';
import {
  tabletQuery,
  mobileQuery,
  tabletLandscapeQuery,
} from '../../utils/mediaqueries';
import Footer from '../molecules/Footer';

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
    <div>
      <ContentWrapper>
        <Heading>Časté otázky</Heading>
        <Fountain />
        {renderFaqPairs}
      </ContentWrapper>
      <Footer />
    </div>
  );
};

export default FaqTemplate;
