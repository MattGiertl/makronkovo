import styled from '@emotion/styled';
import { mobileQuery, tabletQuery, tabletLandscapeQuery } from '../../utils/mediaqueries';

const Image = styled.img({}, props => ({
  width: props.width,
  height: props.height,
  marginRight: props.marginRight,
  marginTop: props.marginTop,
  [mobileQuery]: {
    width: props.mobileWidth,
    height: props.mobileHeight
  },
  [tabletQuery]: {
    width: props.tabletWidth,
  },
  [tabletLandscapeQuery]: {
    width: props.tabletWidth,
  },
}));

export default Image;
