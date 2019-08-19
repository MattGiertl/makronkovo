import styled from '@emotion/styled';
import theme from '../../utils/theme/theme';
import { mobileQuery, tabletQuery, laptopQuery, desktopQuery } from '../../utils/mediaqueries';

const Button = styled.button({
  cursor: 'pointer',
  height: '3.688em',
  background: theme.colors.mediumGold,
  color: theme.colors.white,
  fontSize: theme.fontSizes.small,
  transition: 'background 200ms',
  fontFamily: 'inherit',
  width: '10.625em',

  '&:hover': {
    background: theme.colors.darkGold,
  },

  [mobileQuery]: {
    width: '100%',
    margin: '20px 0 0',
  },

  [tabletQuery]: {
    width: '100%',
  },

  [laptopQuery]: {
    width: '45%',
  },

  [desktopQuery]: {
    width: '25%',
  },
});

export default Button;
