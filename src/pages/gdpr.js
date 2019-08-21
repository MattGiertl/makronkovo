import React from 'react';

import { useStaticQuery } from 'gatsby';

import Paragraph from '../components/atoms/Paragraph';
import GDPRTemplate from '../templates/GDPRTemplate';

const GDPR = () => {
  const data = useStaticQuery(gdprQuery);
  const { nodes: rules } = data.allGdprJson;

  const renderGDPRText = rules.map(text => {
    const { rule } = text;
    return <Paragraph marginBottom="34px">{rule}</Paragraph>;
  });

  return <GDPRTemplate gdprText={renderGDPRText} />;
};

export const gdprQuery = graphql`
  query GDPRQuery {
    allGdprJson {
      nodes {
        rule
      }
    }
  }
`;

export default GDPR;
