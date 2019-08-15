import React from "react";
import styled from "@emotion/styled";
import Heading from "../atoms/Heading";
import MediumHeading from "../atoms/MediumHeading";
import Anchor from "../atoms/Anchor";
import CakeImg from "../../../static/assets/Group.png";
import theme from "../../utils/theme/theme";
import Paragraph from "../atoms/Paragraph";
import {
  tabletQuery,
  mobileQuery,
  desktopQuery,
  laptopQuery
} from "../../utils/mediaqueries";

const NotFoudPage = () => {
  const NotFoudWrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%"
  });

  const StyledCake = styled.img({
    [mobileQuery]: {
      margin: "15px auto 12px auto",
      width: "138px",
      height: "108px"
    },

    [tabletQuery]: {
      margin: "30px auto 32px auto",
      width: "188px",
      height: "158px"
    },

    [laptopQuery]: {
      margin: "30px auto 32px auto",
      width: "188px",
      height: "158px"
    },

    [desktopQuery]: {
      margin: "30px auto 32px auto",
      width: "188px",
      height: "158px"
    }
  });

  const ContentWrapper = styled.div({
    margin: "0 20px"
  });

  const NavWrapper = styled.div({
    display: "flex",
    justifyContent: "space-around",
    [mobileQuery]: {
      margin: "27px -15px"
    },

    [tabletQuery]: {
      margin: "27px 160px 0"
    },

    [laptopQuery]: {
      margin: "27px 730px 0"
    },

    [desktopQuery]: {
      margin: "27px 730px 0"
    }
  });

  const StyledHeading = styled(Heading)({
    [mobileQuery]: {
      fontSize: theme.fontSizes.xl
    },

    [tabletQuery]: {
      fontSize: theme.fontSizes.xxl
    },

    [laptopQuery]: {
      fontSize: theme.fontSizes.xxl
    },

    [desktopQuery]: {
      fontSize: theme.fontSizes.xxl
    }
  });

  return (
    <NotFoudWrapper>
      <StyledHeading
        mobileMarginTop="0px"
        mobileMarginBottom="0px"
        laptopMarginTop="50px"
        laptopMarginBottom="14px"
        desktopMarginTop="50px"
        desktopMarginBottom="14px"
        fontSize={theme.fontSizes.xxl}
      >
        404
      </StyledHeading>
      <StyledCake src={CakeImg} alt="Koláč" />
      <MediumHeading>Hups, stránka sa nenašla.</MediumHeading>
      <ContentWrapper>
        <Paragraph textAlign="center">
          Ale chutné dezerty a torty sa pre Vás nájdu vždy :)
        </Paragraph>
        <Paragraph textAlign="center">Pozrite si našu ponuku.</Paragraph>
        <NavWrapper>
          <Anchor href="/">Torty na mieru</Anchor>
          <Anchor href="/">Dezerty</Anchor>
          <Anchor href="/">Candy bar</Anchor>
        </NavWrapper>
      </ContentWrapper>
    </NotFoudWrapper>
  );
};

export default NotFoudPage;
