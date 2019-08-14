import theme from "../../utils/theme/theme";
import styled from "@emotion/styled";

const Paragraph = styled.p(
  {
    color: theme.colors.mediumGold,
    fontSize: theme.fontSizes.dinProBoldSmall,
    textAlign: "left",
    lineHeight: "19px",
    margin: "0"
  },
  props => ({
    fontWeight: props.bold ? "bold" : "none",
    marginBottom: props.marginBottom
  })
);

export default Paragraph;
