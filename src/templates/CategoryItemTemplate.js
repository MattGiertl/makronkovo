import React from 'react';
import Layout from '../components/organisms/Layout/Layout';
import styled from '@emotion/styled';
import Polaroid from '../components/molecules/Polaroid';
import FountainHeading from '../components/molecules/FountainHeading';
import Paragraph from '../components/atoms/Paragraph';
import { mobileQuery, tabletQuery, laptopQuery, desktopQuery } from '../utils/mediaqueries';
import theme from '../utils/theme/theme';

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

<<<<<<< HEAD
const Description = styled.div({
  display: 'flex',
});

=======
>>>>>>> da2e86938ca3c6f3423f33ae127dfe9e5c6db5e2
const CategoryItemTemplate = ({ pageContext }) => {
  const { items, title } = pageContext;

  const renderItems = items.map(item => (
    <Polaroid shadowed src={item.image}>
      <Paragraph textAlign="center" fontFamily={theme.fontFamilies.dinPro.bold}>
        {item.title}
      </Paragraph>
<<<<<<< HEAD
      <Description>
=======
      <div style={{ display: 'flex' }}>
>>>>>>> da2e86938ca3c6f3423f33ae127dfe9e5c6db5e2
        {item.oldPrice && (
          <Paragraph
            marginRight="5px"
            textDecoration="line-through"
          >{`${item.oldPrice}€`}</Paragraph>
        )}
        <Paragraph>{`${item.newPrice}€`}</Paragraph>
<<<<<<< HEAD
      </Description>
=======
      </div>
>>>>>>> da2e86938ca3c6f3423f33ae127dfe9e5c6db5e2
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
