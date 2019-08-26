import React from 'react';
import styled from '@emotion/styled';
import TrackVisibility from 'react-on-screen';
import { tabletQuery, mobileQuery, laptopQuery, desktopQuery } from '../../utils/mediaqueries';

const StyledCard = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  props => ({
    alignItems: props.alignItems ? props.alignItems : 'center',
    boxShadow: props.boxShadow,
    [mobileQuery]: { margin: props.mobileMargin },
    [tabletQuery]: { margin: props.tabletMargin },
    [laptopQuery]: { margin: props.laptopMargin },
    [desktopQuery]: { margin: props.desktopMargin },
  }),
);

const CardWrapper = ({
  isVisible,
  alignItems,
  children,
  mobileMargin,
  tabletMargin,
  laptopMargin,
  desktopMargin,
}) => (
  <StyledCard
    boxShadow={isVisible ? '0px 10px 20px rgba(0, 0, 0, 0.12)' : 'none'}
    alignItems={alignItems}
    mobileMargin={mobileMargin}
    tabletMargin={tabletMargin}
    laptopMargin={laptopMargin}
    desktopMargin={desktopMargin}
  >
    {children}
  </StyledCard>
);

const Card = ({
  children,
  alignItems,
  mobileMargin,
  tabletMargin,
  laptopMargin,
  desktopMargin,
}) => (
  <TrackVisibility partialVisibility>
    <CardWrapper
      alignItems={alignItems}
      mobileMargin={mobileMargin}
      tabletMargin={tabletMargin}
      laptopMargin={laptopMargin}
      desktopMargin={desktopMargin}
    >
      {children}
    </CardWrapper>
  </TrackVisibility>
);

export default Card;
