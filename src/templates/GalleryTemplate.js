import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/organisms/Layout/Layout';
import FountainHeading from '../components/molecules/FountainHeading';
import { mobileQuery, tabletQuery, laptopQuery, desktopQuery } from '../utils/mediaqueries';

const ContentWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  [mobileQuery]: {
    width: '100%',
  },
  [tabletQuery]: {
    width: '100%',
  },
  [laptopQuery]: {
    width: '90%',
    margin: '0 auto',
  },
  [desktopQuery]: {
    width: '80%',
    margin: '0 auto',
  },
});

const GalleryTemplate = ({ renderContent }) => {
  return (
    <Layout>
      <FountainHeading>GALÉRIA</FountainHeading>
      <ContentWrapper>{renderContent}</ContentWrapper>
    </Layout>
  );
};

export default GalleryTemplate;
