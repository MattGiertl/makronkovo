import React from 'react';

import styled from '@emotion/styled';
import theme from '../utils/theme/theme';

import { mobileQuery, tabletQuery } from '../utils/mediaqueries';

import InfoImage from '../../static/assets/Info.png';

import Anchor from '../components/atoms/Anchor';
import SEO from '../components/atoms/SEO';
import Paragraph from '../components/atoms/Paragraph';
import SocialButton from '../components/atoms/SocialButton';
import Heading from '../components/molecules/FountainHeading';
import Layout from '../components/organisms/Layout/Layout';

const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const ContactWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  margin: '21px',
  width: '60%',
  maxWidth: '800px',
  [mobileQuery]: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [tabletQuery]: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CardWrapper = styled.div({
  margin: '0 10px',
});

const CakeConfigTemplate = ({ cards }) => {
  return (
    <Layout>
      <SEO
        title="Torty na mieru | MAKRONKOVO - Cukrárska manufaktúra"
        description="Vyskladajte si svoju tortu na mieru podľa vašich predstáv. Torty v rôznych veľkostiach, príchutiach so zdobením a zápichom na mieru."
      />
      <Heading>VYSKLADAJTE SI SVOJU TORTU NA MIERU</Heading>
      <ContentWrapper>
        <Paragraph margin="0 30%" mobileMargin="0 5%" tabletMargin="0 15%" textAlign="center">
          Vyskladajte si Vašu tortu a objednávku prosím zadajte e-mailom na adresu
          <Paragraph display="contents" color="blue">
            {' '}
            makronkovo@makronkovo.sk
          </Paragraph>
          . Objednávka je považovaná za záväznú našim potvrdením.
        </Paragraph>
        <ContactWrapper>
          <Anchor
            fontFamily={theme.fontFamilies.dinPro.bold}
            mobileFontSize={theme.fontSizes.small}
            tabletFontSize={theme.fontSizes.small}
            laptopFontSize={theme.fontSizes.small}
            desktopFontSize={theme.fontSizes.small}
            lineHeight="24px"
            href="mailto:makronkovo@makronkovo.sk"
            target="_blank"
          >
            <SocialButton marginRight="12px" icon="mail" />
            makronkovo@makronkovo.sk
          </Anchor>
        </ContactWrapper>
        <CardWrapper>{cards}</CardWrapper>
        <img src={InfoImage} alt="info" />
        <Paragraph
          mobileMargin="10px 40px 50px"
          tabletMargin="10px 25% 80px"
          laptopMargin="10px 30% 126px"
          desktopMargin="10px 30% 146px"
          textAlign="center"
        >
          Zadajte nám prosím aj farebnú škálu v ktorej chcete mať tortu prevedenú, vek oslávenca a
          iné požiadavky ktoré sa Vám budeme snažiť v rámci našich možností splniť a pomôžu nám tak
          vytvoriť perfektnú tortu na mieru
        </Paragraph>
      </ContentWrapper>
    </Layout>
  );
};

export default CakeConfigTemplate;
