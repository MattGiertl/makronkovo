import React from 'react';
import styled from '@emotion/styled';
import theme from '../utils/theme/theme';
import { tabletQuery, mobileQuery, desktopQuery, laptopQuery } from '../utils/mediaqueries';

import Layout from '../components/organisms/Layout/Layout';
import Paragraph from '../components/atoms/Paragraph';
import Heading from '../components/atoms/Heading';
import MediumHeading from '../components/atoms/MediumHeading';
import Anchor from '../components/atoms/Anchor';
import SEO from '../components/atoms/SEO';

import CakeImg from '../../static/assets/Group.png';

const NotFoundWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
});

const StyledCake = styled.img({
  [mobileQuery]: {
    margin: '19px auto 12px',
    width: '118px',
    height: '88px',
  },

  [tabletQuery]: {
    margin: '30px auto 32px',
    width: '188px',
    height: '158px',
  },

  [laptopQuery]: {
    margin: '30px auto 32px',
    width: '188px',
    height: '158px',
  },

  [desktopQuery]: {
    margin: '30px auto 32px',
    width: '188px',
    height: '158px',
  },
});

const ContentWrapper = styled.div({
  [mobileQuery]: {
    margin: '0 1%',
  },

  [tabletQuery]: {
    margin: '0 20%',
  },

  [laptopQuery]: {
    margin: '0 30%',
  },

  [desktopQuery]: {
    margin: '0 35%',
  },
});

const NavWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  margin: '27px',
});

const StyledHeading = styled(Heading)(
  {
    fontFamily: theme.fontFamilies.dinPro.bold,
    [mobileQuery]: {
      fontSize: theme.fontSizes.xxl,
      margin: '0 0 15px',
    },

    [tabletQuery]: {
      fontSize: theme.fontSizes.xxxl,
      margin: '50px 0 40px',
    },

    [laptopQuery]: {
      fontSize: theme.fontSizes.xxxl,
      margin: '14px 0 40px',
    },

    [desktopQuery]: {
      fontSize: theme.fontSizes.xxxl,
      margin: '14px 0 40px',
    },
  },
  props => ({
    marginTop: props.mobileMargin,
    marginBottom: props.mobileMargin,
  }),
);

const NotFoundTemplate = () => {
  const navLinkData = [
    {
      href: '/torty-na-mieru',
      text: 'Torty na mieru',
    },
    {
      href: '/dezerty',
      text: 'Dezerty',
    },
    {
      href: '/candy-bar',
      text: 'Candy Bar',
    },
  ];

  const navLinks = navLinkData.map(link => (
    <Anchor href={link.href} fontFamily={theme.fontFamilies.dinPro.bold}>
      {link.text}
    </Anchor>
  ));

  return (
    <Layout>
      <SEO title="404 - stránka sa nenašla | MAKRONKOVO - Cukrárska manufaktúra" />
      <NotFoundWrapper>
        <StyledHeading>404</StyledHeading>
        <StyledCake src={CakeImg} alt="Koláč" />
        <ContentWrapper>
          <MediumHeading>Hups, stránka sa nenašla.</MediumHeading>
          <Paragraph textAlign="center" marginTop="20px">
            Ale chutné dezerty a torty sa pre Vás nájdu vždy :)
          </Paragraph>
          <Paragraph textAlign="center">Pozrite si našu ponuku.</Paragraph>
          <NavWrapper>{navLinks}</NavWrapper>
        </ContentWrapper>
      </NotFoundWrapper>
    </Layout>
  );
};

export default NotFoundTemplate;
