import React from 'react';

import styled from '@emotion/styled';
import FountainHeading from '../molecules/FountainHeading';

import theme from '../../utils/theme/theme';

const Wrapper = styled.section(
  {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
  },
  props => ({
    background: props.background ? props.background : theme.colors.white,
  }),
);

const Content = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',

  margin: '0 10%',
});

const Section = ({ heading, children, id, background, spaceAround }) => (
  <Wrapper id={id} background={background}>
    <FountainHeading mobileMargin="0 1px">{heading}</FountainHeading>
    <Content>{children}</Content>
  </Wrapper>
);

export default Section;
