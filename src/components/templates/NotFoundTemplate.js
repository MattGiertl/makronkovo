import React from 'react';
import styled from '@emotion/styled';
import NavBar from '../organisms/NavBar/Navbar';
import Heading from '../atoms/Heading';
import MediumHeading from '../atoms/MediumHeading';
import Anchor from '../atoms/Anchor';
import CakeImg from '../../../static/assets/Group.png';
import theme from '../../utils/theme/theme';
import Paragraph from '../atoms/Paragraph';
import {
  tabletQuery,
  mobileQuery,
  desktopQuery,
  laptopQuery,
} from '../../utils/mediaqueries';

const NotFoudTemplate = () => {
  const NotFoundWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  });

  const StyledCake = styled.img({
    [mobileQuery]: {
      margin: '15px auto 12px',
      width: '138px',
      height: '108px',
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
      margin: '0 30px',
    },

    [tabletQuery]: {
      margin: '0 225px',
    },

    [laptopQuery]: {
      margin: '0 650px',
    },

    [desktopQuery]: {
      margin: '0 650px',
    },
  });

  const NavWrapper = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '27px',
  });

  const StyledHeading = styled(Heading)(
    {
      [mobileQuery]: {
        fontSize: theme.fontSizes.xxl,
      },

      [tabletQuery]: {
        fontSize: theme.fontSizes.xxxl,
      },

      [laptopQuery]: {
        fontSize: theme.fontSizes.xxxl,
      },

      [desktopQuery]: {
        fontSize: theme.fontSizes.xxxl,
      },
    },
    props => ({
      marginTop: props.mobileMargin,
      marginBottom: props.mobileMargin,
    }),
  );

  return (
    <>
      <NavBar />
      <NotFoundWrapper>
        <StyledHeading
          mobileMargin="10px"
          laptopMarginTop="50px"
          laptopMarginBottom="14px"
          desktopMarginTop="50px"
          desktopMarginBottom="14px"
          tabletMarginTop="70px"
          tabletMarginBottom="50px"
        >
          404
        </StyledHeading>
        <StyledCake src={CakeImg} alt="Koláč" />
        <ContentWrapper>
          <MediumHeading>Hups, stránka sa nenašla.</MediumHeading>
          <Paragraph textAlign="center">
            Ale chutné dezerty a torty sa pre Vás nájdu vždy :)
          </Paragraph>
          <Paragraph textAlign="center">Pozrite si našu ponuku.</Paragraph>
          <NavWrapper>
            <Anchor href="/" bold>
              Torty na mieru
            </Anchor>
            <Anchor href="/" bold>
              Dezerty
            </Anchor>
            <Anchor href="/" bold>
              Candy bar
            </Anchor>
          </NavWrapper>
        </ContentWrapper>
      </NotFoundWrapper>
    </>
  );
};

export default NotFoudTemplate;
