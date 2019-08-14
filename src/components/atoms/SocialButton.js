import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../utils/theme/theme';

const SocialButton = ({ marginRight, icon }) => (
  <FontAwesomeIcon
    style={{ marginRight: marginRight }}
    icon={icon}
    color={theme.colors.mediumGold}
    size="lg"
  />
);

export default SocialButton;
