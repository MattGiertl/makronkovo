import theme from '../../utils/theme/theme';
import styled from '@emotion/styled';
import { mobileQuery } from '../../utils/mediaqueries';

const Paragraph = styled.p(
  {
    color: theme.colors.mediumGold,
    lineHeight: '19px',
    margin: '0',
  },
  props => ({
    fontWeight: props.bold ? 'bold' : 'normal',
    marginLeft: props.marginLeft,
    marginBottom: props.marginBottom,
    lineHeight: props.lineHeight ? props.lineHeight : '19px',
    textAlign: props.textAlign,
    fontSize: props.fontSize ? props.fontSize : theme.fontSizes.small,

    [mobileQuery]: {
      marginTop: props.mobileMarginTop,
    },
  }),
);

export default Paragraph;
