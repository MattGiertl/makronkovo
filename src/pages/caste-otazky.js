import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import FaqPair from '../components/molecules/FaqPair';
import FaqTemplate from '../templates/FaqTemplate';

const Faq = () => {
  const data = useStaticQuery(faqQuery);
  const { nodes: faqPairs } = data.allFaqJson;

  const renderFaqPairs = faqPairs.map(pair => (
    <FaqPair
      question={pair.question}
      answer={pair.answer}
      email={pair.email}
      underlined={pair.underlined}
      text={pair.text}
    />
  ));

  return <FaqTemplate faqPairs={renderFaqPairs} />;
};

const faqQuery = graphql`
  query FaqQuery {
    allFaqJson {
      nodes {
        question
        answer
        email
        underlined
        text
      }
    }
  }
`;

export default Faq;
