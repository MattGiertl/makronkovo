import React from 'react';
import styled from '@emotion/styled';
import { mobileQuery, desktopQuery } from '../../utils/mediaqueries';
import BackBtn from '../../../static/assets/BackButton.svg';

const BackButtonWrapper = styled.div({
  display: 'flex',
  width: '100%',
  cursor: 'pointer',

  [mobileQuery]: {
    marginBottom: '50px',
  },

  [desktopQuery]: {
    marginLeft: '2%',
  },
});

const BackButton = () => (
  <BackButtonWrapper>
    <img
      src={BackBtn}
      alt='BackButton'
      onClick={() => window.history.back()}
    />
  </BackButtonWrapper>
);

export default BackButton;
