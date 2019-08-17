import React from "react";
import styled from "@emotion/styled";
import Paragraph from "../atoms/Paragraph";
import GDRPText from "../../data/gdrp.json";
import NavBar from "../organisms/NavBar/Navbar";
import theme from "../../utils/theme/theme";
import {
    tabletQuery,
    mobileQuery,
    tabletLandscapeQuery,
    laptopQuery,
    desktopQuery,
  } from "../../utils/mediaqueries";

const ContentWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  margin: "0 22%",

  [mobileQuery]: {
    margin: "0 43px 0 37px"
  },

  [tabletQuery]: {
    margin: "0 43px 0 37px"
  },

  [tabletLandscapeQuery]: {
    margin: "0 29.17%"
  }
});

const StyledParagraph = styled(Paragraph)({
  [tabletQuery]: {
    marginTop: "34px"
  },
  [desktopQuery]: {
    marginTop: "34px"
  },
  [laptopQuery]: {
    marginTop: "34px"
  }
});

const GDRPTemplate = () => {
  const renderGDRPText = GDRPText.rules.map(text => {
    const { rule } = text;
    return (
    <div>
    <Paragraph marginBottom="34px">{rule}</Paragraph>
    </div>)
  });

  return (
    <>
      <NavBar />
      <div>
        <ContentWrapper>
          <StyledParagraph bold fontSize={theme.fontSizes.medium} marginBottom="34px">
            Súhlas so spracovaním osobných údajov pre newsletter
          </StyledParagraph>
          {renderGDRPText}
        </ContentWrapper>
      </div>
    </>
  );
};

export default GDRPTemplate;
