import React from "react";
import Paragraph from "../atoms/Paragraph";
import styled from "@emotion/styled";

const FaqPairWrapper = styled.div({
  marginBottom: "19px",
  display: "flex",
  flexDirection: "column"
});

const FaqPair = ({ question, answer }) => (
  <FaqPairWrapper>
    <Paragraph bold>{question}</Paragraph>
    <Paragraph>{answer}</Paragraph>
  </FaqPairWrapper>
);

export default FaqPair;
