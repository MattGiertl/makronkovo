import React from "react";
import Image from "./Image";
import Paragraph from "./Paragraph";
import styled from "@emotion/styled";

const ContentWrapper = styled.div(
  {
    display: "flex"
  },
  props => ({
    height: props.cardHeight,
    width: props.cardWidth
  })
);

const Card = ({
  cardHeight,
  cardWidth,
  image,
  imageHeight,
  imageWidth,
  imageName,
  heading,
  paragraph,
  bold
}) => (
  <ContentWrapper cardHeight={cardHeight} cardWidth={cardWidth}>
    <Image
      image={image}
      height={imageHeight}
      width={imageWidth}
      imageName={imageName}
    />
    <div>
      <Paragraph bold={bold}>{heading}</Paragraph>
      <Paragraph>{paragraph}</Paragraph>
    </div>
  </ContentWrapper>
);

export default Card;
