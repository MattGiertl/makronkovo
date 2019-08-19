import theme from '../../utils/theme/theme';
import styled from '@emotion/styled';
import { mobileQuery, tabletQuery, desktopQuery, laptopQuery } from '../../utils/mediaqueries';

const Paragraph = styled.p(
  {
    color: theme.colors.mediumGold,
    fontFamily: 'caslon_antiqueregular',
    lineHeight: '19px',
    margin: '0',
  },
  props => ({
    fontWeight: props.bold ? 'bold' : 'normal',
    fontFamily: "'Caslon Antique', sans-serif",
    margin: props.margin,
    marginLeft: props.marginLeft,
    marginRight: props.marginRight,
    marginBottom: props.marginBottom,
    lineHeight: props.lineHeight ? props.lineHeight : '19px',
    textAlign: props.textAlign,
    fontSize: props.fontSize ? props.fontSize : theme.fontSizes.small,
    textDecoration: props.textDecoration,

    [mobileQuery]: {
      width: props.mobileWidth,
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
