import styled from '@emotion/styled';

const UnorderedList = styled.ul({
    display: 'flex',
    flexDirection: 'column',
    marginBlockEnd: 0,
  },
  props => ({
    listStyleType: props.listStyleType,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    paddingInlineStart: props.paddingInlineStart,
    marginBlockStart: props.marginBlockStart,
  }));

  export default UnorderedList;