import React, { useEffect } from 'react';
import { useStaticQuery } from 'gatsby';

import FaqTemplate from '../components/templates/FaqTemplate';
import FaqPair from '../components/molecules/FaqPair';
import { FaqQuery } from '../utils/graphqlQueries';

const Faq = () => {
  const data = useStaticQuery(FaqQuery);
  const { nodes: faqPairs } = data.allFaqJson;

  useEffect(() => {
    console.log(data.allFaqJson);
  });

  const renderFaqPairs = faqPairs.map(pair => (
    <FaqPair question={pair.question} answer={pair.answer} />
  ));

  return <FaqTemplate faqPairs={renderFaqPairs} />;
};

export default Faq;
