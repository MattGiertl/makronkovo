import React from "react";
import styled from "@emotion/styled";
import theme from "../../utils/theme/theme";
import {
  tabletQuery,
  mobileQuery,
  desktopQuery,
  laptopQuery
} from "../../utils/mediaqueries";

const StyledAnchor = styled.a({
  color: theme.colors.darkGold,
  textDecoration: "none",
  fontWeight: "bold",
  
  [mobileQuery]: {
    fontSize: theme.fontSizes.small
  },

  [tabletQuery]: {
    fontSize: theme.fontSizes.medium
  },

  [laptopQuery]: {
    fontSize: theme.fontSizes.medium
  },

  [desktopQuery]: {
    fontSize: theme.fontSizes.medium
  }
});

const Anchor = ({ href, children }) => (
  <StyledAnchor href={href}>{children}</StyledAnchor>
);

export default Anchor;
