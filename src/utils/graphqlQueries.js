import { graphql } from 'gatsby';

export const FaqQuery = graphql`
  query FaqQuery {
    allFaqJson {
      nodes {
        question
        answer
      }
    }
  }
`;
