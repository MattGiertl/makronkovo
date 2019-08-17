import theme from "../../utils/theme/theme";
import styled from "@emotion/styled";

const Paragraph = styled.p(
  {
    color: theme.colors.mediumGold,
    lineHeight: "19px",
    margin: "0"
  },
  props => ({
    fontWeight: props.bold ? "bold" : "normal",
    marginLeft: props.marginLeft,
    marginBottom: props.marginBottom,
    marginTop: props.marginTop,
    lineHeight: props.lineHeight ? props.lineHeight : "19px",
    textAlign: props.textAlign ? props.textAlign : "left",
    fontSize: props.fontSize ? props.fontSize : theme.fontSizes.small,
  })
);

export default Paragraph;
