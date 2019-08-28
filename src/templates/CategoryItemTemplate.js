import React from 'react';
import Layout from '../components/organisms/Layout/Layout';
import styled from '@emotion/styled';
import Polaroid from '../components/molecules/Polaroid/Polaroid';
import FountainHeading from '../components/molecules/FountainHeading';
import Paragraph from '../components/atoms/Paragraph';
import { mobileQuery, tabletQuery, laptopQuery, desktopQuery } from '../utils/mediaqueries';
import theme from '../utils/theme/theme';

const CategoriesWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',

  [mobileQuery]: {
    margin: '0 15px',
  },

  [tabletQuery]: {
    margin: '0 5%',
  },

  [laptopQuery]: {
    margin: '0 15%',
  },

  [desktopQuery]: {
    width: '1300px',
    margin: '70px auto 0',
  },
});

const Description = styled.div({
  display: 'flex',
});

const CategoryItemTemplate = ({ pageContext }) => {
  const { items, title } = pageContext;
  const { dinPro } = theme.fontFamilies;

  const renderItems = items.map(item => {
    const { image, to, title, oldPrice, newPrice } = item;

    return (
      <Polaroid shadowed src={image} to={to}>
        <Paragraph textAlign="center" fontFamily={dinPro.bold}>
          {title}
        </Paragraph>
        <Description>
          {oldPrice && (
            <Paragraph marginRight="5px" textDecoration="line-through">{`${oldPrice}€`}</Paragraph>
          )}
          {newPrice && <Paragraph>{`${newPrice}€`}</Paragraph>}
        </Description>
      </Polaroid>
    );
  });

  return (
    <Layout>
      <FountainHeading>{title}</FountainHeading>
      <CategoriesWrapper>{renderItems}</CategoriesWrapper>
    </Layout>
  );
};

export default CategoryItemTemplate;
