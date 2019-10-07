import React from 'react';

import styled from '@emotion/styled';
import theme from '../utils/theme/theme';

import { tabletQuery, tabletLandscapeQuery, mobileQuery } from '../utils/mediaqueries';

import Paragraph from '../components/atoms/Paragraph';
import Map from '../components/atoms/Map';
import Layout from '../components/organisms/Layout/Layout';
import FountainHeading from '../components/molecules/FountainHeading';
import SocialButton from '../components/atoms/SocialButton';
import SEO from '../components/atoms/SEO';

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

const ContactWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
});

const TelephoneContactWrapper = styled.div({
  display: 'flex',
  [mobileQuery]: {
    flexWrap: 'wrap',
  },
});

const ContactTemplate = () => (
  <Layout>
    <SEO
      title="Kontakt | MAKRONKOVO - Cukrárska manufaktúra"
      description="Máte záujem o naše dezerty alebo torty? Neváhajte nás kontaktovať cez naše sociálne siete, telefonicky, sms alebo mailom. Radi Vám pomôžeme."
    />
    <ContentWrapper>
      <FountainHeading>KONTAKT</FountainHeading>
      <Paragraph marginBottom="50px" fontSize={theme.fontSizes.medium}>
        MAKRONKOVO s.r.o.
      </Paragraph>
      <ContactWrapper>
        <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
          <SocialButton marginRight="8px" icon="location" />
          Zvolenská cesta 85, Banská Bystrica
        </Paragraph>
        <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
          <SocialButton marginRight="8px" icon="mail" mail />
          makronkovo@makronkovo.sk
        </Paragraph>
        <TelephoneContactWrapper>
          <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
            <SocialButton marginRight="8px" icon="telephone" />
            0948 009 800
          </Paragraph>
          <Paragraph marginLeft="5px">(Mgr. Romana Ďurišová)</Paragraph>
        </TelephoneContactWrapper>
      </ContactWrapper>
      <OpeningHours>
        <Paragraph fontFamily={theme.fontFamilies.dinPro.bold}>Otváracia doba:</Paragraph>
        <Paragraph marginLeft="4px">Podľa dohody</Paragraph>
      </OpeningHours>
      <Map />
    </ContentWrapper>
  </Layout>
);

export default ContactTemplate;
