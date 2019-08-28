import React from 'react';
import Heading from '../atoms/Heading';
import styled from '@emotion/styled';
import Fountain from '../atoms/Fountain';
import { mobileQuery } from '../../utils/mediaqueries';

const Wrapper = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',

    [mobileQuery]: {
      margin: '0 50px 25px',
    },
  },
  props => ({
    margin: props.margin ? props.margin : '0 5px 25px',
  }),
);

const FountainHeading = ({ children }) => (
  <Wrapper>
    <Heading>{children}</Heading>
    <Fountain />
  </Wrapper>
);

export default FountainHeading;
