import styled from "@emotion/styled";
import theme from "../../utils/theme/theme";
import {
  mobileQuery
} from "../../utils/mediaqueries";

const MediumHeading = styled.h2({
  color: theme.colors.mediumGold,
  fontSize: theme.fontSizes.xl,
  textAlign: "center",
  [mobileQuery]: {
    margin: '0'
  }
});

export default MediumHeading;
