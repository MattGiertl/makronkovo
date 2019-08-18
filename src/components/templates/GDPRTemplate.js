import React from "react";
import styled from "@emotion/styled";
import Paragraph from "../atoms/Paragraph";
import NavBar from "../organisms/NavBar/Navbar";
import theme from "../../utils/theme/theme";
import {
  tabletQuery,
  mobileQuery,
  tabletLandscapeQuery
} from "../../utils/mediaqueries";

const ContentWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  margin: "0 22%",

  [mobileQuery]: {
    margin: "0 43px 0 37px"
  },

  [tabletQuery]: {
    margin: "0 20%"
  },

  [tabletLandscapeQuery]: {
    margin: "0 29.17%"
  }
});

const GDRPTemplate = props => {
  return (
    <>
      <NavBar />
      <ContentWrapper>
        <Paragraph
          bold
          fontSize={theme.fontSizes.medium}
          marginBottom="34px"
          marginTop="34px"
          mobileMarginTop="0"
        >
          Súhlas so spracovaním osobných údajov pre newsletter
        </Paragraph>
        {props.gdprText}
      </ContentWrapper>
    </>
  );
};

export default GDRPTemplate;