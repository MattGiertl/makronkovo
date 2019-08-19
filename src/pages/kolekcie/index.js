import React from 'react';
import CollectionTemplate from '../../components/templates/CollectionTemplate';
import { graphql, StaticQuery } from 'gatsby';

export default ({ path }) => (
  <StaticQuery
    query={graphql`
      query Desserts {
        allMarkdownRemark(filter: { frontmatter: { path: { eq: "Boa" } }) {
          edges {
            node {
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `}
    render={data => <CollectionTemplate data={data} />}
  />
);
