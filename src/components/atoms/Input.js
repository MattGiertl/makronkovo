import styled from '@emotion/styled';
import { mobileQuery } from '../../utils/mediaqueries';
import theme from '../../utils/theme/theme';

const Input = styled.input({
  [mobileQuery]: {
    width: '100%',
    height: '39px',
    fontSize: theme.fontSizes.small,
    border: `1px solid ${theme.colors.mediumGold}`,
    textAlign: 'center',
    marginTop: '49px',
    color: theme.colors.mediumGold,

    '&:placeholder': {
      color: theme.colors.mediumGold,
    },
  },
});

export default Input;
