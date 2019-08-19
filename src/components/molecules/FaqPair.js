import React from 'react';
import Paragraph from '../atoms/Paragraph';
import styled from '@emotion/styled';
import theme from '../../utils/theme/theme';

const FaqPairWrapper = styled.div({
  marginBottom: '19px',
  display: 'flex',
  flexDirection: 'column',
});

const FaqPair = ({ question, answer }) => (
  <FaqPairWrapper>
    <Paragraph fontFamily={theme.fontFamilies.dinPro.bold}>{question}</Paragraph>
    <Paragraph>{answer}</Paragraph>
  </FaqPairWrapper>
);

export default FaqPair;
