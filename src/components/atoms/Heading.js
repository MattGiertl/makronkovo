import theme from '../../utils/theme/theme';
import styled from '@emotion/styled';
import { mobileQuery } from '../../utils/mediaqueries';

const Heading = styled.h1(
  {
    color: theme.colors.mediumGold,
    fontSize: theme.fontSizes.large,
    letterSpacing: theme.letterSpacing.heading,
    textAlign: 'center',
    lineHeight: '28px',
    margin: 0,

    [mobileQuery]: {
      fontSize: theme.fontSizes.medium,
    },
  },
  props => ({
    marginTop: props.marginTop,
    marginBottom: props.marginBottom ? props.marginBottom : '6px',
    margin: props.margin,

    [mobileQuery]: {
      margin: props.mobileMargin,
    },
  }),
);

export default Heading;
