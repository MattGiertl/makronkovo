import React from 'react';
import styled from '@emotion/styled';
import theme from '../../utils/theme/theme';
import {
  mobileQuery,
  laptopQuery,
  desktopQuery,
  tabletQuery,
} from '../../utils/mediaqueries';
import { Link } from 'gatsby';
import Paragraph from '../atoms/Paragraph';

const Wrapper = styled.div(
  {
    display: 'flex',
    cursor: 'pointer',
    flexDirection: 'column',
    padding: '10px 10px 0',
    background: 'white',
    textDecoration: 'none',
    marginBottom: '10px',

    [mobileQuery]: {
      height: '300px',
      width: '260px',
      marginBottom: '40px',
    },

    [tabletQuery]: {
      height: '275px',
      width: '245px',
      marginBottom: '40px',
    },

    [laptopQuery]: {
      width: '280px',
      height: '305px',
    },

    [desktopQuery]: {
      width: '380px',
      height: '405px',
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

const Price = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const DescriptionWrapper = styled.div({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Polaroid = ({
  img,
  alt,
  description,
  descriptionText,
  heading,
  to = '/',
  oldPrice,
  price,
  shadowed,
  id,
}) => {
  const renderPrice = () => (
    <DescriptionWrapper>
      <Paragraph bold>{description}</Paragraph>
      <Price>
        <Paragraph
          marginRight="10px"
          fontSize={theme.fontSizes.small}
          textDecoration="line-through"
        >
          {oldPrice}€
        </Paragraph>
        <Paragraph textAlign="center" fontSize={theme.fontSizes.small}>
          {price}€
        </Paragraph>
      </Price>
    </DescriptionWrapper>
  );

  const renderReference = () => (
    <DescriptionWrapper>
      <Paragraph bold>{description}</Paragraph>
      <Paragraph textAlign="center">{descriptionText}</Paragraph>
    </DescriptionWrapper>
  );
  return (
    <PolaroidWrapper to={to} disabled={!to} shadowed={shadowed} id={id}>
      <PolaroidImg src={img} alt={alt} />
      {heading && (
        <Paragraph fontSize={theme.fontSizes.large} margin="auto">
          {heading}
        </Paragraph>
      )}
      {price && renderPrice()}
      {descriptionText && renderReference()}
    </PolaroidWrapper>
  );
};

export default Polaroid;
