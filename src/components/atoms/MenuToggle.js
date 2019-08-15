import React from 'react';
import styled from '@emotion/styled-base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import theme from '../../utils/theme/theme';

import { mobileQuery, tabletQuery } from '../../utils/mediaqueries';

const StyledIcon = styled(FontAwesomeIcon)({
  color: theme.colors.mediumGold,
  display: 'none',
  position: 'fixed',
  zIndex: '-1',

  [mobileQuery]: {
    display: 'flex',
    top: '50px',
    right: '25px',
  },

  [tabletQuery]: {
    display: 'flex',
    top: '50px',
    right: '25px',
  },
});

const MenuToggle = ({ opened, onClick }) => {
  const icon = opened ? 'times' : 'bars';

  return <StyledIcon icon={icon} size="2x" onClick={onClick} />;
};

export default MenuToggle;
