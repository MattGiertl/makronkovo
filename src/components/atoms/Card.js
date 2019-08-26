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
    // width: props.width,
    [mobileQuery]: { margin: props.mobileMargin, width: props.mobileWidth },
    [tabletQuery]: { margin: props.tabletMargin, width: props.tabletWidth },
    [laptopQuery]: { margin: props.laptopMargin, width: props.laptopWidth },
    [desktopQuery]: { margin: props.desktopMargin, width: props.desktopWidth },
  }),
);

const CardWrapper = ({
  isVisible,
  alignItems,
  mobileWidth,
  tabletWidth,
  laptopWidth,
  desktopWidth,
  children,
  mobileMargin,
  tabletMargin,
  laptopMargin,
  desktopMargin,
}) => (
  <StyledCard
    boxShadow={isVisible ? '0px 10px 20px rgba(0, 0, 0, 0.12)' : 'none'}
    mobileWidth={mobileWidth}
    tabletWidth={tabletWidth}
    laptopWidth={laptopWidth}
    desktopWidth={desktopWidth}
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
  mobileWidth,
  tabletWidth,
  laptopWidth,
  desktopWidth,
  mobileMargin,
  tabletMargin,
  laptopMargin,
  desktopMargin,
  partialVisibility
}) => (
  <TrackVisibility partialVisibility={partialVisibility}>
    <CardWrapper
      alignItems={alignItems}
      mobileWidth={mobileWidth}
      tabletWidth={tabletWidth}
      laptopWidth={laptopWidth}
      desktopWidth={desktopWidth}
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
