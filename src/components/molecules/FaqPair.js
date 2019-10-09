import React from 'react';
import Paragraph from '../atoms/Paragraph';
import styled from '@emotion/styled';
import theme from '../../utils/theme/theme';

const FaqPairWrapper = styled.div({
  marginBottom: '19px',
  display: 'flex',
  flexDirection: 'column',
});

const Anchor = styled.a({
  display: 'contents',
  fontSize: theme.fontSizes.small,
  cursor: 'pointer',
  textDecoration: 'none',
});

const FaqPair = ({ question, answer, email, underlined, text }) => (
  <FaqPairWrapper>
    <Paragraph fontFamily={theme.fontFamilies.dinPro.bold}>{question}</Paragraph>
    <Paragraph>
      {answer}
      <Anchor href="mailto:makronkovo@makronkovo.sk" target="_blank">
        {email}
      </Anchor>
      <u>{underlined}</u>
      <Paragraph display="contents">{text}</Paragraph>
    </Paragraph>
  </FaqPairWrapper>
);

export default FaqPair;
