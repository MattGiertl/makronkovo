import React from 'react';
import Heading from '../atoms/Heading';
import styled from '@emotion/styled';
import Fountain from '../atoms/Fountain';
import { mobileQuery } from '../../utils/mediaqueries';

const Wrapper = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
  },
  props => ({
    margin: props.margin,
    marginTop: props.marginTop,
    marginBottom: props.marginBottom,

    [mobileQuery]: {
      margin: props.mobileMargin,
      marginTop: props.mobileMarginTop,
      marginBottom: props.mobileMarginBottom,
      marginLeft: props.mobileMarginLeft,
      marginRight: props.mobileMarginRight,
    },
  }),
);

const FountainHeading = ({
  mobileMarginBottom = 0,
  mobileMargin,
  children,
  ...props
}) => (
  <Wrapper mobileMargin="25px 0" mobileMarginBottom {...props}>
    <Heading mobileMargin={mobileMargin} marginBottom="6px">
      {children}
    </Heading>
    <Fountain />
  </Wrapper>
);

export default FountainHeading;
