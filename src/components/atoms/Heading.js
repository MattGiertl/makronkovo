import theme from '../../utils/theme/theme';
import styled from '@emotion/styled';
import { tabletQuery, mobileQuery, desktopQuery, laptopQuery } from '../../utils/mediaqueries';

const Heading = styled.h1(
  {
    color: theme.colors.mediumGold,
    letterSpacing: theme.letterSpacing.heading,
    lineHeight: '28px',
    margin: 0,
  },

  props => ({
    textAlign: props.textAlign ? props.textAlign : 'center',
    fontFamily: props.fontFamily ? props.fontFamily : theme.fontFamilies.caslonAntique.regular,
    marginTop: props.marginTop,
    marginBottom: props.marginBottom ? props.marginBottom : '6px',
    margin: props.margin,
    fontSize: props.fontSize ? props.fontSize : theme.fontSizes.large,

    [mobileQuery]: {
      margin: props.mobileMargin,
      marginTop: props.mobileMarginTop,
      marginBottom: props.mobileMarginBottom,
    },

    [tabletQuery]: {
      marginTop: props.tabletMarginTop,
      marginBottom: props.tabletMarginBottom,
    },

    [laptopQuery]: {
      marginTop: props.laptopMarginTop,
      marginBottom: props.laptopMarginBottom,
    },

    [desktopQuery]: {
      marginTop: props.desktopMarginTop,
      marginBottom: props.desktopMarginBottom,
    },
  }),
);

export default Heading;
