import styled from '@emotion/styled';

import {
  mobileQuery,
  tabletQuery,
  desktopQuery,
  laptopQuery,
  mobileToTabletQuery,
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

    [laptopQuery]: {
      marginBottom: '50px',
    },

    [desktopQuery]: {
      marginBottom: '60px',
    },
  },
  props => ({
    height: props.showMenu ? '100vh' : '203px',
    [mobileToTabletQuery]: {
      marginBottom: props.marginBottomMobile,
    },
  }),
);

export default NavBarWrapper;
