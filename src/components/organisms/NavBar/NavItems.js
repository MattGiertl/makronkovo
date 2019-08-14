import styled from '@emotion/styled';

import {
  desktopQuery,
  laptopQuery,
  mobileQuery,
  tabletQuery,
} from '../../../utils/mediaqueries';

const NavItems = styled.div(
  {
    display: 'flex',
    alignItems: 'center',
    width: '100%',

    [mobileQuery]: {
      overflow: 'hidden',
      alignItems: 'center',
      flexDirection: 'column',
    },

    [tabletQuery]: {
      height: '100vh',
      overflow: 'hidden',
      alignItems: 'center',
      flexDirection: 'column',
    },

    [laptopQuery]: {
      margin: '0 50px',
      justifyContent: 'space-around',
    },

    [desktopQuery]: {
      margin: '0 100px',
      justifyContent: 'space-around',
    },
  },
  props => ({
    [mobileQuery]: {
      display: props.showMenu ? 'flex' : 'none',
    },

    [tabletQuery]: {
      display: props.showMenu ? 'flex' : 'none',
    },
  }),
);

export default NavItems;
