import styled from "@emotion/styled";
import {
  mobileQuery
} from "../../utils/mediaqueries";

const Image = styled.img({}, props => ({
  width: props.width,
  height: props.height,
  marginRight: props.marginRight,
  [mobileQuery]: {
    width: props.mobileWidth
  }
}));

export default Image;
