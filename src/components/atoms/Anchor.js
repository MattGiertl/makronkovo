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
    color: theme.colors.mediumGold,
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
    // fontWeight: props.bold ? "bold" : "normal",
    fontFamily: props.fontFamily ? props.fontFamily : theme.fontFamilies.dinPro.regular,
  })
);

const Anchor = ({ href, children, fontFamily }) => (
  <StyledAnchor href={href} fontFamily={fontFamily}>{children}</StyledAnchor>
);

export default Anchor;
