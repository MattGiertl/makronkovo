import styled from '@emotion/styled';

import {
  tabletQuery,
  laptopQuery,
  desktopQuery,
} from '../../../utils/mediaqueries';

const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  [tabletQuery]: {
    height: '66px',
  },

  [laptopQuery]: {
    height: '66px',
  },

  [desktopQuery]: {
    height: '110px',
  },
});

export default Content;
