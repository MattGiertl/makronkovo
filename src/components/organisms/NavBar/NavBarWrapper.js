
import styled from '@emotion/styled';

import {
  mobileQuery,
  tabletQuery,
} from '../../../utils/mediaqueries';

const NavBarWrapper = styled.div(
  {
    display: 'flex',
    height: '203px',

    [mobileQuery]: {
      flexDirection: 'column',
    },

    [tabletQuery]: {
      flexDirection: 'column',
    },
  },
  props => ({
    height: props.showMenu ? '100vh' : '203px',
  }),
);

export default NavBarWrapper;