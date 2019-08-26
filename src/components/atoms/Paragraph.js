import theme from '../../utils/theme/theme';
import styled from '@emotion/styled';
import { mobileQuery, tabletQuery, desktopQuery, laptopQuery } from '../../utils/mediaqueries';

const Paragraph = styled.p(
  {
    color: theme.colors.mediumGold,
    margin: '0',
  },
  props => ({
    fontFamily: props.fontFamily ? props.fontFamily : theme.fontFamilies.dinPro.regular,
    margin: props.margin,
    marginLeft: props.marginLeft,
    marginRight: props.marginRight,
    marginBottom: props.marginBottom,
    marginTop: props.marginTop,
    lineHeight: props.lineHeight ? props.lineHeight : '19px',
    textAlign: props.textAlign,
    fontSize: props.fontSize ? props.fontSize : theme.fontSizes.small,
    textDecoration: props.textDecoration,

    [mobileQuery]: {
      width: props.mobileWidth,
      margin: props.mobileMargin,
      marginTop: props.mobileMarginTop,
      fontSize: props.mobileFontSize,
    },

    [tabletQuery]: {
      width: props.tabletWidth,
      fontSize: props.tabletFontSize,
    },

    [laptopQuery]: {
      width: props.laptopWidth,
      margin: props.laptopMargin,
      fontSize: props.laptopFontSize,
    },

    [desktopQuery]: {
      width: props.desktopWidth,
      margin: props.desktopMargin,
      fontSize: props.desktopFontSize,
    },
  }),
);

export default Paragraph;
