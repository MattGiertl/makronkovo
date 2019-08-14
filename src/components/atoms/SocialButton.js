import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../utils/theme/theme';
import styled from '@emotion/styled';

const StyledAnchor = styled.a({
  textDecoration: 'none',
  cursor: 'pointer',
});

const SocialButton = ({ marginRight, icon, to }) => (
  <StyledAnchor target="_blank" href={to}>
    <FontAwesomeIcon
      style={{ marginRight: marginRight }}
      icon={icon}
      color={theme.colors.mediumGold}
      size="lg"
    />
  </StyledAnchor>
);

export default SocialButton;
