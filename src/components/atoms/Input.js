import styled from '@emotion/styled';
import { laptopQuery, desktopQuery } from '../../utils/mediaqueries';
import theme from '../../utils/theme/theme';

const Input = styled.input({
  height: '46px',
  width: '100%',
  fontSize: theme.fontSizes.small,
  border: `1px solid ${theme.colors.mediumGold}`,
  color: theme.colors.mediumGold,
  textAlign: 'center',

  '&:placeholder': {
    color: theme.colors.mediumGold,
  },

  [laptopQuery]: {
    width: '380px',
  },

  [desktopQuery]: {
    width: '380px',
  },
});

export default Input;
