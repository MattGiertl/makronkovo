import React from 'react';
import AboutTemplate from '../templates/AboutTemplate';
import { useStaticQuery, graphql } from 'gatsby';
import theme from '../utils/theme/theme';
import Card from '../components/atoms/Card';
import styled from '@emotion/styled';
import Paragraph from '../components/atoms/Paragraph';
import Image from '../components/atoms/Drawing';
import { tabletQuery, mobileQuery, laptopQuery, desktopQuery } from '../utils/mediaqueries';

const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [mobileQuery]: { margin: '10px 10% 10px' },
  [tabletQuery]: { margin: '35px 10%' },
  [laptopQuery]: { margin: '35px 10%' },
  [desktopQuery]: {
    margin: '35px 10%',
  },
});

const TextWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  [mobileQuery]: { margin: '5px 1%' },
  [tabletQuery]: { margin: '35px 1%' },
  [laptopQuery]: { margin: '35px 1%' },
  [desktopQuery]: {
    margin: '35px 1%',
  },
});

const AboutPage = () => {
  const data = useStaticQuery(aboutQuery);
  const { nodes: aboutContent } = data.allAboutJson;

  const renderCards = aboutContent.map(card => (
    <Card
      mobileMargin="0 20px 30px"
      tabletMargin="31px 15% 40px"
      laptopMargin="0 20% 30px"
      desktopMargin="0 30% 30px"
    >
      <ContentWrapper>
        <Image src={card.image} alt={card.imageName} />
        <TextWrapper>
          <Paragraph
            margin="20px 0"
            fontFamily={
              card.isParagraphBold
                ? theme.fontFamilies.dinPro.regular
                : theme.fontFamilies.dinPro.bold
            }
          >
            {card.heading}
          </Paragraph>
          <Paragraph
            fontFamily={
              card.isParagraphBold
                ? theme.fontFamilies.dinPro.bold
                : theme.fontFamilies.dinPro.regular
            }
          >
            {card.paragraph}
          </Paragraph>
        </TextWrapper>
      </ContentWrapper>
    </Card>
  ));

  return <AboutTemplate cards={renderCards} />;
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
