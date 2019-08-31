import React from 'react';
import CakeConfigTemplate from '../templates/CakeConfigTemplate';
import { useStaticQuery, graphql } from 'gatsby';
import theme from '../utils/theme/theme';
import styled from '@emotion/styled';
import Card from '../components/atoms/Card';
import Paragraph from '../components/atoms/Paragraph';
import CakeType from '../components/molecules/CakeType';
import TypeLook from '../components/molecules/CakeView';

const TypeWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginBottom: 0,
});

const Image = styled.img({
  margin: '44px auto 0',
});

const ListItem = styled.li(
  {
    fontFamily: theme.fontFamilies.dinPro.regular,
    fontSize: theme.fontSizes.small,
    color: theme.colors.mediumGold,
  },
  props => ({
    marginTop: props.marginTop,
  }),
);

const CakeConfig = () => {
  const data = useStaticQuery(cakeConfigQuery);
  const { firstCard, secondCard } = data.allCakeConfigJson.edges[0].node;
  const renderCards = () => {
    const renderFirstCardItems = firstCard.items.map(item => (
      <CakeType
        src={item.image}
        imgName={item.imgName}
        type={item.type}
        weight={item.weight}
        height={item.height}
        portions={item.portions}
        price={item.price}
      />
    ));

    const renderSecondCardItems = secondCard.items.map(item => (
      <TypeLook src={item.image} imgName={item.imgName} heading={item.heading}>
        {item.options.map(item => (
          <ListItem>{item}</ListItem>
        ))}
      </TypeLook>
    ));

    return (
      <>
        <Card
          mobileMargin="0 0 30px"
          tabletMargin="31px 0 40px"
          laptopMargin="0 0 30px"
          desktopMargin="0 0 30px"
          mobileWidth="100%"
          tabletWidth="700px"
          laptopWidth="900px"
          desktopWidth="1010px"
        >
          <Image src={firstCard.section} alt="prvý odsek" />
          <Paragraph
            margin="9px"
            fontSize={theme.fontSizes.large}
            fontFamily={theme.fontFamilies.caslonAntique.bold}
            letterSpacing={theme.letterSpacing.heading}
          >
            {firstCard.title}
          </Paragraph>
          <Paragraph
            margin="38px"
            fontFamily={theme.fontFamilies.dinPro.bold}
            fontSize={theme.fontSizes.medium}
            textAlign="center"
          >
            {firstCard.paragraph}
          </Paragraph>
          <TypeWrapper>{renderFirstCardItems}</TypeWrapper>
          <Paragraph
            margin="40px 5% 21px"
            fontFamily={theme.fontFamilies.dinPro.bold}
            fontSize={theme.fontSizes.medium}
            textAlign="center"
          >
            {firstCard.secondParagraph}
          </Paragraph>
          <img src={firstCard.image} alt="dvojposchodová torta" />
          <Paragraph
            margin="20px auto 40px"
            fontFamily={theme.fontFamilies.dinPro.regular}
            fontSize={theme.fontSizes.medium}
          >
            {firstCard.price}
          </Paragraph>
        </Card>
        <Card
          alignItems="left"
          mobileMargin="0 0 30px"
          tabletMargin="31px 0 40px"
          laptopMargin="0 0 30px"
          desktopMargin="0 0 30px"
          mobileWidth="100%"
          tabletWidth="700px"
          laptopWidth="900px"
          desktopWidth="1010px"
          partialVisibility="true"
        >
          <Image src={secondCard.section} alt="druhý odsek" />
          <Paragraph
            margin="9px auto 43px"
            fontSize={theme.fontSizes.large}
            fontFamily={theme.fontFamilies.caslonAntique.bold}
            letterSpacing={theme.letterSpacing.heading}
          >
            {secondCard.title}
          </Paragraph>
          {renderSecondCardItems}
        </Card>
      </>
    );
  };
  return <CakeConfigTemplate cards={renderCards()} />;
};

const cakeConfigQuery = graphql`
  query CakeConfigQuery {
    allCakeConfigJson {
      edges {
        node {
          firstCard {
            image
            paragraph
            price
            secondParagraph
            section
            title
            items {
              height
              image
              imgName
              portions
              price
              type
              weight
            }
          }
          secondCard {
            section
            title
            items {
              heading
              imgName
              image
              options
            }
          }
        }
      }
    }
  }
`;

export default CakeConfig;
