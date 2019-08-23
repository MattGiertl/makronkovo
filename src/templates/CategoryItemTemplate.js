import React from 'react';
import Layout from '../components/organisms/Layout/Layout';
import styled from '@emotion/styled';
import Polaroid from '../components/molecules/Polaroid';
import FountainHeading from '../components/molecules/FountainHeading';
import Paragraph from '../components/atoms/Paragraph';
import { mobileQuery, tabletQuery, laptopQuery, desktopQuery } from '../utils/mediaqueries';

const CategoriesWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',

  [mobileQuery]: {
    margin: '0 35px',
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

const CategoryItemTemplate = ({ pageContext }) => {
  const { items, title } = pageContext;

  const renderItems = items.map(item => (
    <Polaroid shadowed src={item.image}>
      <Paragraph>{item.title}</Paragraph>
      {item.oldPrice && <Paragraph>{item.oldPrice}</Paragraph>}
      <Paragraph>{item.newPrice}</Paragraph>
    </Polaroid>
  ));

  return (
    <Layout>
      <FountainHeading>{title}</FountainHeading>
      <CategoriesWrapper>{renderItems}</CategoriesWrapper>
    </Layout>
  );
};

export default CategoryItemTemplate;
