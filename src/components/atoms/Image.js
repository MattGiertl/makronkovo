import styled from "@emotion/styled";

const Image = styled.img({}, props => ({
  src: props.Image,
  width: props.width,
  height: props.height,
  alt: props.imageName,
  marginRight: props.marginRight,
}));

export default Image;
