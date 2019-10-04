import styled from '@emotion/styled';
import theme from '../../../utils/theme/theme';

const Label = styled.label(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '117px',
    height: '40px',
    color: theme.colors.white,
    fontFamily: theme.fontFamilies.caslonAntique.regular,
    fontSize: theme.fontSizes.small,
    marginBottom: '5px',
    marginLeft: '-9px',
  },
  props => ({
    background: props.background,
    top: props.top,
  }),
);

export default Label;
