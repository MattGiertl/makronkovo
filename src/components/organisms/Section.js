import React from 'react';

import styled from '@emotion/styled';
import FountainHeading from '../molecules/FountainHeading';

import theme from '../../utils/theme/theme';
import {
  laptopQuery,
  desktopQuery,
  mobileQuery,
  laptopToDesktopQuery,
} from '../../utils/mediaqueries';

const Wrapper = styled.section(
  {
    display: 'flex',
    flexDirection: 'column',
    margin: '30px 0',
    paddingTop: '65px',
  },
  props => ({
    background: props.background ? props.background : theme.colors.white,
  }),
);

const Content = styled.div(
  {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '0 10%',
    height: 'auto',
    [mobileQuery]: {
      margin: 0,
    },

    [laptopQuery]: {
      margin: '0 5%',
    },

    [desktopQuery]: {
      margin: '0 10%',
    },
  },
  props => ({
    [mobileQuery]: {
      maxWidth: props.mobileMaxWidth,
      margin: '0 auto',
    },

    [laptopToDesktopQuery]: {
      maxWidth: props.maxWidth,
      margin: '0 auto',
    },
  }),
);

const Section = ({ heading, children, id, background, maxWidth, mobileMaxWidth }) => (
  <Wrapper id={id} background={background}>
    <FountainHeading>{heading}</FountainHeading>
    <Content maxWidth={maxWidth} mobileMaxWidth={mobileMaxWidth}>
      {children}
    </Content>
  </Wrapper>
);

export default Section;
