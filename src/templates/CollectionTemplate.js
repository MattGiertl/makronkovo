import React from 'react';

import { mobileQuery, desktopQuery, laptopQuery, tabletQuery } from '../utils/mediaqueries';

import styled from '@emotion/styled';

import Paragraph from '../components/atoms/Paragraph';
import FountainHeading from '../components/molecules/FountainHeading';
import Polaroid from '../components/molecules/Polaroid/Polaroid';
import Layout from '../components/organisms/Layout/Layout';
import theme from '../utils/theme/theme';
import SEO from '../components/atoms/SEO';
import { toPascalCase } from '../utils/functions';

const CategoriesWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',

  [mobileQuery]: {
    margin: '0 15px 20px',
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

const TextWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  [mobileQuery]: {
    display: 'none',
  },

  [laptopQuery]: {
    margin: '0 30% 20px',
  },

  [desktopQuery]: {
    margin: '0 38% 20px',
  },
});

const CollectionTemplate = ({ pageContext }) => {
  const { categoryItems, title, lightText, boldText } = pageContext;

  const renderCategoryItems = categoryItems.map(categoryItem => (
    <Polaroid to={categoryItem.to} shadowed src={categoryItem.image} sm>
      <Paragraph fontFamily={theme.fontFamilies.caslonAntique.bold} textAlign="center">
        {categoryItem.categoryName}
      </Paragraph>
    </Polaroid>
  ));

  const seoTitle = toPascalCase(title);

  return (
    <Layout>
      <SEO title={`${seoTitle} | MAKRONKOVO - Cukrárska manufaktúra`} />
      <FountainHeading>{title}</FountainHeading>
      <TextWrapper>
        <Paragraph fontFamily={theme.fontFamilies.dinPro.regular} textAlign="center">
          {lightText}
        </Paragraph>
        <Paragraph marginTop="20px" fontFamily={theme.fontFamilies.dinPro.bold} textAlign="center">
          {boldText}
        </Paragraph>
      </TextWrapper>
      <CategoriesWrapper>{renderCategoryItems}</CategoriesWrapper>
    </Layout>
  );
};

export default CollectionTemplate;
