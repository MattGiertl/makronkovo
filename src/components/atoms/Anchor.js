import React from "react";
import styled from "@emotion/styled";
import theme from "../../utils/theme/theme";

const StyledAnchor = styled.a({
  fontSize: theme.fontSizes.medium,
  color: theme.colors.darkGold,
  textDecoration: "none",
  fontWeight: "bold"
});

const Anchor = ({ href, children }) => (
  <StyledAnchor href={href}>{children}</StyledAnchor>
);

export default Anchor;
