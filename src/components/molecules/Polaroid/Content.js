import styled from '@emotion/styled';

import {
  tabletQuery,
  laptopQuery,
  desktopQuery,
  mobileQuery,
} from '../../../utils/mediaqueries';

const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  [mobileQuery]: {
    height: '100%',
  },

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
