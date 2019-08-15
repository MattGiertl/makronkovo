import theme from "../../utils/theme/theme";
import styled from "@emotion/styled";
import {
  tabletQuery,
  mobileQuery,
  desktopQuery,
  laptopQuery
} from "../../utils/mediaqueries";

const Heading = styled.h1(
  {
    color: theme.colors.mediumGold,
    fontSize: theme.fontSizes.xl,
    letterSpacing: theme.letterSpacing.heading,
    textAlign: "center",
    lineHeight: "28px"
  },

  props => ({
    marginBottom: props.marginBottom ? props.marginBottom : "6px",
    fontSize: props.fontSize ? props.fontSize : theme.fontSizes.xl,

    [mobileQuery]: {
      marginTop: props.mobileMarginTop,
      marginBottom: props.mobileMarginBottom
    },

    [tabletQuery]: {
      marginTop: props.tabletMarginTop,
      marginBottom: props.tabletMarginBottom
    },

    [laptopQuery]: {
      marginTop: props.laptopMarginTop,
      marginBottom: props.laptopMarginBottom
    },

    [desktopQuery]: {
      marginTop: props.desktopMarginTop,
      marginBottom: props.desktopMarginBottom
    }
  })
);

export default Heading;
