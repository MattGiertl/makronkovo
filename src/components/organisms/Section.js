import React from 'react';

import styled from '@emotion/styled';
import FountainHeading from '../molecules/FountainHeading';
import {
  mobileQuery,
  laptopQuery,
  desktopQuery,
} from '../../utils/mediaqueries';

import theme from '../../utils/theme/theme';

const Wrapper = styled.section(
  {
    display: 'flex',
    flexDirection: 'column',
    background: theme.colors.lightPink,
    marginTop: '30px',
    marginBottom: '65px',
  },
  props => ({
    background: props.background ? props.background : theme.colors.white,
  }),
);

const Content = styled.div(
  {
    display: 'flex',
    flexWrap: 'wrap',

    [mobileQuery]: {
      margin: '0 30px',
    },

    [laptopQuery]: {
      margin: '0 100px 50px',
    },

    [desktopQuery]: {
      margin: '0 350px 50px',
    },
  },
  props => ({
    justifyContent: props.spaceAround ? 'space-around' : 'center',
  }),
);

const Section = ({ heading, children, id, background, spaceAround }) => (
  <Wrapper id={id} background={background}>
    <FountainHeading
      marginTop="35px"
      marginBottom="45px"
      mobileMargin="0 1px"
    >
      {heading}
    </FountainHeading>
    <Content spaceAround={spaceAround}>{children}</Content>
  </Wrapper>
);

export default Section;
