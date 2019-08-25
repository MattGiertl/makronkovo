import styled from '@emotion/styled';
import theme from '../../../utils/theme/theme';
import { tabletQuery } from '../../../utils/mediaqueries';
import { Link } from 'gatsby';

const Wrapper = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    background: theme.colors.white,
    padding: '9px 9px 0',
    margin: '0 15px 40px',
    cursor: 'pointer',
    textDecoration: 'none',

    height: '19rem',
    width: '18rem',

    [tabletQuery]: {
      height: '17rem',
    },

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

const PolaroidWrapper = Wrapper.withComponent(Link);

export default PolaroidWrapper;
