import React from 'react';
import Layout from '../components/organisms/Layout/Layout';
import styled from '@emotion/styled';
import Polaroid from '../components/molecules/Polaroid/Polaroid';
import FountainHeading from '../components/molecules/FountainHeading';
import Paragraph from '../components/atoms/Paragraph';
import { mobileQuery, tabletQuery, laptopQuery, desktopQuery } from '../utils/mediaqueries';

import PlaceholderImg from '../../static/assets/cake.jpg';
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
  const { items, title: categoryName, to: categoryTo } = pageContext;
  const { dinPro } = theme.fontFamilies;

  const renderItems = items.map(item => {
    const { image, to, title, oldPrice, price } = item;

    return (
      <Polaroid shadowed src={image ? image : PlaceholderImg} to={`/${categoryTo}/${to}`}>
        <Paragraph textAlign="center" fontFamily={dinPro.bold}>
          {title}
        </Paragraph>
        <Description>
          {oldPrice && (
            <Paragraph marginRight="5px" textDecoration="line-through">{`${oldPrice}€`}</Paragraph>
          )}
          {price && <Paragraph>{`${price}€`}</Paragraph>}
        </Description>
      </Polaroid>
    );
  });

  return (
    <Layout>
      <FountainHeading>{categoryName}</FountainHeading>
      <CategoriesWrapper>{renderItems}</CategoriesWrapper>
    </Layout>
  );
};

export default CategoryItemTemplate;
