import React from 'react';
import Layout from '../components/organisms/Layout/Layout';
import Heading from '../components/molecules/FountainHeading';
import Paragraph from '../components/atoms/Paragraph';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../utils/theme/theme';
import SocialButton from '../components/atoms/SocialButton';
import { mobileQuery, tabletQuery } from '../utils/mediaqueries';
import Anchor from '../components/atoms/Anchor';
import InfoImage from '../../static/assets/Info.png';

const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const ContactWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
  margin: '21px',
  width: '60%',
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

const CakeConfigTemplate = ({ cards }) => {
  return (
    <Layout>
      <Heading>VYSKLADAJTE SI SVOJU TORTU NA MIERU</Heading>
      <ContentWrapper>
        <Paragraph margin="0 35%" mobileMargin="0 5%" tabletMargin="0 15%" textAlign="center">
          Na základe našej ponuky nižšie nám prosím písomne zadajte Vašu objednávku cez email, sms
          alebo na naše sociálne siete.
        </Paragraph>
        <ContactWrapper>
          <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
            <FontAwesomeIcon style={{ marginRight: '12px' }} icon="envelope" />
            makronkovo@makronkovo.sk
          </Paragraph>
          <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
            <FontAwesomeIcon style={{ marginRight: '12px' }} icon="phone-alt" />
            0948 009 800
          </Paragraph>
          <Anchor
            href="https://www.instagram.com/makronkovo/?hl=en"
            fontSize={theme.fontSizes.small}
            fontFamily={theme.fontFamilies.dinPro.bold}
            lineHeight="24px"
          >
            <SocialButton
              to="https://www.instagram.com/makronkovo/?hl=en"
              marginRight="12px"
              icon={['fab', 'instagram']}
            />
            makronkovo
          </Anchor>
          <Anchor
            href="https://www.facebook.com/makronkovo/"
            fontSize={theme.fontSizes.small}
            fontFamily={theme.fontFamilies.dinPro.bold}
            lineHeight="24px"
          >
            <SocialButton
              to="https://www.facebook.com/makronkovo/"
              icon={['fab', 'facebook']}
              marginRight="12px"
            />
            makronkovo
          </Anchor>
        </ContactWrapper>
        {cards}
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
