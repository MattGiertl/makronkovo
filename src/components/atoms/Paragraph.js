import theme from '../../utils/theme/theme';
import styled from '@emotion/styled';
import {
  mobileQuery,
  tabletQuery,
  desktopQuery,
  laptopQuery,
} from '../../utils/mediaqueries';

const Paragraph = styled.p(
  {
    color: theme.colors.mediumGold,
    lineHeight: '19px',
    margin: '0',
  },
  props => ({
    fontWeight: props.bold ? 'bold' : 'normal',
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
    },

    [tabletQuery]: {
      width: props.tabletWidth,
    },

    [laptopQuery]: {
      width: props.laptopWidth,
      margin: props.laptopMargin,
    },

    [desktopQuery]: {
      width: props.desktopWidth,
      margin: props.desktopMargin,
    },
  }),
);

export default Paragraph;
