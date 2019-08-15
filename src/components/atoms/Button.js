import styled from '@emotion/styled';
import { mobileQuery } from '../../utils/mediaqueries';
import theme from '../../utils/theme/theme';

const Button = styled.button(
  {
    cursor: 'pointer',
    
    [mobileQuery]: {
      height: '40px',
      background: theme.colors.mediumGold,
      color: theme.colors.white,
      fontSize: theme.fontSizes.small,
    },
  },
  props => ({
    width: props.width ? props.width : '170px',
    marginTop: props.marginTop,
  }),
);

export default Button;
