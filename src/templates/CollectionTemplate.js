import React from 'react';

import FountainHeading from '../components/molecules/FountainHeading';
import Layout from '../components/organisms/Layout/Layout';

const CollectionTemplate = ({ title }) => {
  return (
    <Layout>
      <FountainHeading>{title}</FountainHeading>
    </Layout>
  );
};

export default CollectionTemplate;
