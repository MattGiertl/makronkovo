import styled from '@emotion/styled';
import { laptopQuery, mobileQuery } from '../../utils/mediaqueries';
import theme from '../../utils/theme/theme';

const Input = styled.input(
  {
    height: '46px',
    fontSize: theme.fontSizes.small,
    border: `1px solid ${theme.colors.mediumGold}`,
    color: theme.colors.mediumGold,
    textAlign: 'center',

    '&:placeholder': {
      color: theme.colors.mediumGold,
    },

    [mobileQuery]: {
      width: '100%',
    },

    [laptopQuery]: {
      width: '380px',
    },
  },
  props => ({
    width: props.width ? props.width : '100%',
  }),
);

export default Input;
