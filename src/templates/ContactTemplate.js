import React from 'react';

import styled from '@emotion/styled';
import theme from '../utils/theme/theme';

import { tabletQuery, tabletLandscapeQuery, mobileQuery } from '../utils/mediaqueries';

import Paragraph from '../components/atoms/Paragraph';
import Map from '../components/atoms/Map';
import Layout from '../components/organisms/Layout/Layout';
import FountainHeading from '../components/molecules/FountainHeading';
import SocialButton from '../components/atoms/SocialButton';
import Mail from '../../static/assets/Mail.svg';
import Telephone from '../../static/assets/Telefon.svg';
import Location from '../../static/assets/Location.svg';

const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 29.17%',
  justifyContent: 'center',
  alignItems: 'center',

  [mobileQuery]: {
    margin: '0 37px',
  },

  [tabletQuery]: {
    margin: '0 43px',
  },

  [tabletLandscapeQuery]: {
    margin: '0 29.17%',
  },
});

const OpeningHours = styled.div({
  display: 'flex',
  marginTop: '61px',
});

const ContactTemplate = () => (
  <Layout>
    <ContentWrapper>
      <FountainHeading>KONTAKT</FountainHeading>
      <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
        <SocialButton src={Location} marginRight="8px" />
        Zvolenská cesta 85, Banská Bystrica
      </Paragraph>
      <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
        <SocialButton marginRight="8px" src={Mail} />
        makronkovo@makronkovo.sk
      </Paragraph>
      <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
        <SocialButton marginRight="8px" src={Telephone} />
        0948 009 800
      </Paragraph>
      <OpeningHours>
        <Paragraph fontFamily={theme.fontFamilies.dinPro.bold}>Otváracia doba:</Paragraph>
        <Paragraph marginLeft="4px">Podľa dohody</Paragraph>
      </OpeningHours>
      <Map />
    </ContentWrapper>
  </Layout>
);

export default ContactTemplate;
