import React from 'react';
import styled from '@emotion/styled';
import theme from '../../utils/theme/theme';
import Paragraph from '../atoms/Paragraph';

const PriceWrapper = styled.div({
  display: 'flex',
  marginBottom: '20px',
});

const Price = ({ oldPrice, price }) => (
  <PriceWrapper>
    {oldPrice && (
      <Paragraph marginRight="5px" fontSize={theme.fontSizes.large} textDecoration="line-through">
        {`${oldPrice}€`}
      </Paragraph>
    )}
    <Paragraph fontSize={theme.fontSizes.large}>{`${price}€`}</Paragraph>
  </PriceWrapper>
);

export default Price;
