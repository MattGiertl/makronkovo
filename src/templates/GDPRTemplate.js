import React from 'react';

import { tabletQuery, mobileQuery, tabletLandscapeQuery } from '../utils/mediaqueries';
import styled from '@emotion/styled';
import theme from '../utils/theme/theme';

import Layout from '../components/organisms/Layout/Layout';
import Paragraph from '../components/atoms/Paragraph';

const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 22%',

  [mobileQuery]: {
    margin: '0 43px 0 37px',
  },

  [tabletQuery]: {
    margin: '0 20%',
  },

  [tabletLandscapeQuery]: {
    margin: '0 29.17%',
  },
});

const GDPRTemplate = ({ gdprText }) => {
  return (
    <Layout>
      <ContentWrapper>
        <Paragraph
          fontFamily= {theme.fontFamilies.dinPro.bold}
          fontSize={theme.fontSizes.medium}
          marginBottom="34px"
          marginTop="34px"
          mobileMarginTop="0"
        >
          Súhlas so spracovaním osobných údajov pre newsletter
        </Paragraph>
        {gdprText}
      </ContentWrapper>
    </Layout>
  );
};

export default GDPRTemplate;
