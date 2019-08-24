import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../utils/theme/theme';
import { mobileQuery } from '../../utils/mediaqueries';

const BackButtonWrapper = styled.div({
  display: 'flex',
  width: '100%',

  [mobileQuery]: {
    marginBottom: '50px',
  },
});

const BackButton = () => (
  <BackButtonWrapper>
    <FontAwesomeIcon
      size="lg"
      color={theme.colors.darkGold}
      icon="chevron-left"
      onClick={() => window.history.back()}
    />
  </BackButtonWrapper>
);

export default BackButton;
