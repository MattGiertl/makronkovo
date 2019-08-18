import React from 'react';
import Heading from '../atoms/Heading';
import styled from '@emotion/styled';
import Fountain from '../atoms/Fountain';
import { mobileQuery } from '../../utils/mediaqueries';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '25px',

  [mobileQuery]: {
    marginBottom: '30px',
  },
});

const FountainHeading = ({ mobileMarginBottom = 0, mobileMargin, children, ...props }) => (
  <Wrapper mobileMargin="25px 0" mobileMarginBottom={mobileMarginBottom} {...props}>
    <Heading mobileMargin={mobileMargin} marginBottom="6px">
      {children}
    </Heading>
    <Fountain />
  </Wrapper>
);

export default FountainHeading;
