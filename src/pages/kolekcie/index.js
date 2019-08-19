import React from 'react';
import CollectionTemplate from '../../components/templates/CollectionTemplate';

const CollectionPage = ({ pageContext }) => {
  const { title } = pageContext.frontmatter;

  return <CollectionTemplate title={title} />;
};

export default CollectionPage;
