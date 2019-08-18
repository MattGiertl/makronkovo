import React from 'react';
// import CollectionTemplate from '../../components/templates/CollectionTemplate';
import { graphql } from 'gatsby';

const CollectionsPage = ({ data }) => {
  const { node: section } = data.allMarkdownRemark.edges;

//   const currentsection = section.filter
//   return (
//     <>
//       {/* <CollectionTemplate title={data} /> */}
//       {console}
//     </>
//   );
// };

export const pageQuery = graphql`
  query Desserts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default CollectionsPage;
