import React from 'react';
import Layout from '../components/organisms/Layout/Layout';
import Heading from '../components/molecules/FountainHeading';
import Paragraph from '../components/atoms/Paragraph';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../utils/theme/theme';
import SocialButton from '../components/atoms/SocialButton';
import { mobileQuery, tabletQuery, desktopQuery, laptopQuery } from '../utils/mediaqueries';
import NumberOne from '../../static/assets/NumberOne.png';
import DoubleCake from '../../static/assets/DoubleCake.png';
import Anchor from '../components/atoms/Anchor';
import CakeType from '../components/molecules/CakeType';
import MiniCake from '../../static/assets/Group.png';
import Card from '../components/atoms/Card';


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

const TypeWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap'
});

const CakeConfigTemplate = () => {
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
        <Card>
          <img src={NumberOne} alt="prvý odsek" />
          <Paragraph margin="9px" fontSize={theme.fontSizes.large}>
            VELKOSŤ
          </Paragraph>
          <Paragraph
            margin="38px"
            fontFamily={theme.fontFamilies.dinPro.bold}
            fontSize={theme.fontSizes.medium}
          >
            Jednoposchodové torty (18 cm priemer)
          </Paragraph>
          <TypeWrapper>
            <CakeType src={MiniCake} imgName="Mini" type="Mini" weight="1500 g" height="výška 10 cm" portions="8 procií" price="od 45€" />
            <CakeType src={MiniCake} imgName="Mini" type="Mini" weight="1500 g" height="výška 10 cm" portions="8 procií" price="od 45€" />
            <CakeType src={MiniCake} imgName="Mini" type="Mini" weight="1500 g" height="výška 10 cm" portions="8 procií" price="od 45€" />
            <CakeType src={MiniCake} imgName="Mini" type="Mini" weight="1500 g" height="výška 10 cm" portions="8 procií" price="od 45€" />
          </TypeWrapper>
          <Paragraph
            margin="40px auto 21px"
            fontFamily={theme.fontFamilies.dinPro.bold}
            fontSize={theme.fontSizes.medium}
          >
            Dvojposchodová torta a torta nad 22 porcií
          </Paragraph>
          <img src={DoubleCake} alt="dvojposchodová torta" />
          <Paragraph
            margin="20px auto 40px"
            fontFamily={theme.fontFamilies.dinPro.regular}
            fontSize={theme.fontSizes.medium}
          >
            5 € / porcia
          </Paragraph>
        </Card>
      </ContentWrapper>
    </Layout>
  );
};

export default CakeConfigTemplate;
