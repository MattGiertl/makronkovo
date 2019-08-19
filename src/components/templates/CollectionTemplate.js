import React from 'react';

import FountainHeading from '../molecules/FountainHeading';
import Layout from '../organisms/Layout/Layout';

const CollectionTemplate = ({ title }) => {
  return (
    <Layout>
      <FountainHeading>{title}</FountainHeading>
    </Layout>
  );
};

export default CollectionTemplate;
