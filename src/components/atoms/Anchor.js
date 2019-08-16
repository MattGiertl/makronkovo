import React from "react";
import styled from "@emotion/styled";
import theme from "../../utils/theme/theme";
import {
  tabletQuery,
  mobileQuery,
  desktopQuery,
  laptopQuery
} from "../../utils/mediaqueries";

const StyledAnchor = styled.a(
  {
    color: theme.colors.darkGold,
    textDecoration: "none",

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
  },
  props => ({
    fontWeight: props.bold ? "bold" : "normal",
  })
);

const Anchor = ({ href, children, bold }) => (
  <StyledAnchor href={href} bold={bold}>{children}</StyledAnchor>
);

export default Anchor;
