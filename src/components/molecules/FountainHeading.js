import React from 'react';
import Heading from '../atoms/Heading';
import styled from '@emotion/styled';
import Fountain from '../atoms/Fountain';
import {
  mobileQuery,
  laptopQuery,
  desktopQuery,
  tabletQuery,
} from '../../utils/mediaqueries';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',

  [mobileQuery]: {
    margin: '35px 0 25px',
  },

  [tabletQuery]: {
    margin: '65px 0 45px',
  },

  [laptopQuery]: {
    margin: '65px 0 45px',
  },

  [desktopQuery]: {
    margin: '65px 0 45px',
  },
});

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
