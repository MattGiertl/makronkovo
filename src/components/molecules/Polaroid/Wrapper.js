import styled from '@emotion/styled';
import theme from '../../../utils/theme/theme';
import { mobileQuery, tabletQuery } from '../../../utils/mediaqueries';
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

    transition: 'box-shadow 300ms',

    '&:hover': {
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.24)',
    },
  },
  props => ({
    boxShadow: props.shadowed ? '0px 10px 20px rgba(0, 0, 0, 0.12)' : null,
    [mobileQuery]: {
      height: props.sm ? '130px' : '19rem',
      width: props.sm ? '115px' : '18rem',
      margin: props.sm ? '0 5px 10px' : '0 15px 40px',
    },
  }),
);

const PolaroidWrapper = Wrapper.withComponent(Link);

export default PolaroidWrapper;
