import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/organisms/Layout/Layout';
import FountainHeading from '../components/molecules/FountainHeading';
import { laptopQuery, desktopQuery, mobileToTabletQuery } from '../utils/mediaqueries';
import SEO from '../components/atoms/SEO';

const ContentWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  [mobileToTabletQuery]: {
    width: '100%',
  },
  [laptopQuery]: {
    width: '90%',
    margin: '0 auto',
  },
  [desktopQuery]: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
});

const GalleryTemplate = ({ renderContent }) => {
  return (
    <Layout>
      <SEO title="Galéria | MAKRONKOVO - Cukrárska manufaktúra" />
      <FountainHeading>GALÉRIA</FountainHeading>
      <ContentWrapper>{renderContent}</ContentWrapper>
    </Layout>
  );
};

export default GalleryTemplate;
