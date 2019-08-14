import theme from "../../utils/theme/theme";
import styled from "@emotion/styled";

const Heading = styled.h1({
  color: theme.colors.mediumGold,
  fontSize: theme.fontSizes.heading,
  letterSpacing: theme.letterSpacing.heading,
  textAlign: "center",
  lineHeight: "28px",
  marginBottom: "6px",
});

export default Heading;
