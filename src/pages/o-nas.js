import React from 'react';
import AboutTemplate from '../templates/AboutTemplate';
import { useStaticQuery, graphql } from 'gatsby';
import theme from '../utils/theme/theme';
import Card from '../components/molecules/Card';

const AboutPage = () => {
  const data = useStaticQuery(aboutQuery);
  const { nodes: aboutContent } = data.allAboutJson;

  const renderCard = aboutContent.map(card => (
    <Card
      image={card.image}
      imageName={card.imageName}
      heading={card.heading}
      paragraph={card.paragraph}
      key={card.heading}
      fontFamilyHeading={
        card.isParagraphBold ? theme.fontFamilies.dinPro.regular : theme.fontFamilies.dinPro.bold
      }
      fontFamilyParagraph={
        card.isParagraphBold ? theme.fontFamilies.dinPro.bold : theme.fontFamilies.dinPro.regular
      }
    />
  ));

  return <AboutTemplate cards={renderCard} />;
};

const aboutQuery = graphql`
  query AboutPageQuery {
    allAboutJson {
      nodes {
        image
        imageName
        heading
        paragraph
        isParagraphBold
      }
    }
  }
`;

export default AboutPage;
