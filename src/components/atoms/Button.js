import styled from '@emotion/styled';
import theme from '../../utils/theme/theme';
import { mobileQuery } from '../../utils/mediaqueries';

const Button = styled.button(
  {
    cursor: 'pointer',
    height: '52px',
    background: theme.colors.mediumGold,
    color: theme.colors.white,
    fontSize: theme.fontSizes.small,
    transition: 'background 200ms',

    '&:hover': {
      background: theme.colors.darkGold,
    },

    [mobileQuery]: {
      width: '100%',
      margin: 0,
      marginTop: '20px',
    },
  },
  props => ({
    width: props.width ? props.width : '170px',
    marginTop: props.marginTop,
    marginLeft: props.marginLeft,
  }),
);

export default Button;
