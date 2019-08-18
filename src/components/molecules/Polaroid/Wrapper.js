import styled from '@emotion/styled';
import theme from '../../../utils/theme/theme';

const Wrapper = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    background: theme.colors.white,
    padding: '9px 9px 0',

    height: '19em',
    width: '18em',
    marginBottom: '40px',

    transition: 'box-shadow 300ms, height 300ms, width 300ms',

    '&:hover': {
      width: '19em',
      height: '20em',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.24)',
    },
  },
  props => ({
    boxShadow: props.shadowed ? '0px 10px 20px rgba(0, 0, 0, 0.12)' : null,
  }),
);

export default Wrapper;
