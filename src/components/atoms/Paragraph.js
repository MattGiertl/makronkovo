import theme from "../../utils/theme/theme";
import styled from "@emotion/styled";

const Paragraph = styled.p(
  {
    color: theme.colors.mediumGold,
    fontSize: theme.fontSizes.small,
    lineHeight: "19px",
    margin: "0"
  },
  props => ({
    fontWeight: props.bold ? "bold" : "normal",
    marginBottom: props.marginBottom,
    textAlign: props.textAlign ? props.textAlign : "left"
  })
);

export default Paragraph;
