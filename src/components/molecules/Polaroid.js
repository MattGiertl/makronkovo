import React from 'react';
import styled from '@emotion/styled';
import theme from '../../utils/theme/theme';
import { mobileQuery } from '../../utils/mediaqueries';
import { Link } from 'gatsby';

const Wrapper = styled.div(
  {
    display: 'flex',
    cursor: 'pointer',
    flexDirection: 'column',
    width: '380px',
    height: '405px',
    padding: '10px 10px 0',
    background: 'white',
    marginBottom: '40px',
    textDecoration: 'none',

    [mobileQuery]: {
      height: '300px',
    },
  },
  props => ({
    boxShadow: props.shadowed ? '0px 10px 20px rgba(0, 0, 0, 0.12)' : undefined,
  }),
);

const PolaroidWrapper = Wrapper.withComponent(Link);

const PolaroidImg = styled.img({
  width: '100%',
});

const Description = styled.label({
  margin: 'auto 0',
  fontSize: theme.fontSizes.large,
  color: theme.colors.mediumGold,
  textAlign: 'center',

  [mobileQuery]: {
    fontSize: theme.fontSizes.medium,
  },
});

const Price = styled.label({
  textAlign: 'center',
  fontSize: theme.fontSizes.medium,
  color: theme.colors.mediumGold,
});

const Polaroid = ({
  img,
  alt,
  description,
  to = '/',
  oldPrice,
  price,
  shadowed,
  id,
}) => {
  return (
    <PolaroidWrapper to={to} shadowed={shadowed} id={id}>
      <PolaroidImg src={img} alt={alt} />
      <Description>{description}</Description>
      {price && (
        <Price>{`${<strikethrough>{oldPrice}</strikethrough>} ${price}`}</Price>
      )}
    </PolaroidWrapper>
  );
};

export default Polaroid;
