import styled from '@emotion/styled';
import theme from '../../../utils/theme/theme';

import {
  mobileQuery,
  tabletQuery,
  laptopQuery,
  desktopQuery,
} from '../../../utils/mediaqueries';

const Wrapper = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    background: theme.colors.white,
    padding: '9px 9px 0',

    height: '405px',
    width: '380px',

    transition: 'box-shadow 300ms',

    '&:hover': {
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.24)',
    },

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
  },
  props => ({
    boxShadow: props.shadowed ? '0px 10px 20px rgba(0, 0, 0, 0.12)' : null,
  }),
);

export default Wrapper;
