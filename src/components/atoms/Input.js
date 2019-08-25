import styled from '@emotion/styled';
import { laptopQuery, mobileQuery, tabletQuery, desktopQuery } from '../../utils/mediaqueries';
import theme from '../../utils/theme/theme';

const Input = styled.input(
  {
    height: '46px',
    fontSize: theme.fontSizes.small,
    border: `1px solid ${theme.colors.mediumGold}`,
    fontFamily: theme.fontFamilies.dinPro.regular,
    color: theme.colors.mediumGold,
    textAlign: 'center',

    '::placeholder': {
      color: theme.colors.mediumGold,
      opacity: 0.5
    },

    [mobileQuery]: {
      width: '100%',
    },

    [tabletQuery]: {
      width: '100%',
      marginRight: '15px',
    },

    [laptopQuery]: {
      width: '45%',
    },

    [desktopQuery]: {
      width: '25%',
      marginRight: '15px',
    },
  },
  props => ({
    width: props.width ? props.width : '100%',
  }),
);

export default Input;
