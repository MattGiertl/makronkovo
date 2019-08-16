import styled from '@emotion/styled';
import theme from '../../../utils/theme/theme';

import {
  mobileQuery,
  tabletQuery,
  laptopQuery,
  desktopQuery,
} from '../../../utils/mediaqueries';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  background: theme.colors.white,
  padding: '9px 9px 0',

  height: '405px',
  width: '380px',

  [mobileQuery]: {
    marginBottom: '40px',
  },

  [tabletQuery]: {
    height: '243px',
    width: '228px',
    marginBottom: '20px',
  },

  [laptopQuery]: {
    height: '243px',
    width: '228px',
  },

  [desktopQuery]: {
    height: '405px',
    width: '380px',
    padding: '15px 15px 0',
  },
});

export default Wrapper;
