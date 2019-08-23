import React from 'react';
import AboutTemplate from '../templates/AboutTemplate';
import { useStaticQuery, graphql } from 'gatsby';
import theme from '../utils/theme/theme';
import Card from '../components/molecules/Card';
import TrackVisibility from 'react-on-screen';

const CardContent = ({
  image,
  imageName,
  heading,
  paragraph,
  fontFamilyHeading,
  fontFamilyParagraph,
  isVisible,
}) => {
  return (
    <Card
      boxShadow={isVisible ? '0px 10px 20px rgba(0, 0, 0, 0.12)' : 'normal'}
      image={image}
      imageName={imageName}
      heading={heading}
      paragraph={paragraph}
      fontFamilyHeading={fontFamilyHeading}
      fontFamilyParagraph={fontFamilyParagraph}
    />
  );
};

const AboutPage = () => {
  const data = useStaticQuery(aboutQuery);
  const { nodes: aboutContent } = data.allAboutJson;

  const renderCard = aboutContent.map(card => (
    <TrackVisibility>
      <CardContent
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
    </TrackVisibility>
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
