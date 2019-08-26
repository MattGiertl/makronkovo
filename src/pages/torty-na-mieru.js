import React from 'react';
import CakeConfigTemplate from '../templates/CakeConfigTemplate';
import { useStaticQuery, graphql } from 'gatsby';
import theme from '../utils/theme/theme';
import styled from '@emotion/styled';
import Card from '../components/atoms/Card';
import Paragraph from '../components/atoms/Paragraph';
import CakeType from '../components/molecules/CakeType';
import { tabletQuery, mobileQuery, laptopQuery, desktopQuery } from '../utils/mediaqueries';

//Card
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

//SecondCard
const HeadingDiv = styled.div({
  display: 'flex',
  marginTop: '43px',
  marginLeft: 0,
});

const ListItem = styled.li(
  {
    fontFamily: theme.fontFamilies.dinPro.regular,
    fontSize: theme.fontSizes.medium,
    color: theme.colors.mediumGold,
  },
  props => ({
    marginTop: props.marginTop,
  }),
);

const UnorderList = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  flexWrap: 'wrap',
  paddingInlineStart: '0px',
  marginBlockEnd: '0px',
});

const ListWrapper = styled.div({
  display: 'flex',
  alignItems: 'left',
  [mobileQuery]: { marginLeft: '0', width: '100%' },
  [tabletQuery]: { marginLeft: '30%', width: '60%' },
  [laptopQuery]: { marginLeft: '30%', width: '60%' },
  [desktopQuery]: { margin: '0 auto 41px 30%', width: '60%' },
});

const OptionWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 20%',
});

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
      <OptionWrapper>
        <HeadingDiv>
          <img src={item.image} alt={item.imgName} />
          <Paragraph
            fontFamily={theme.fontFamilies.dinPro.bold}
            fontSize={theme.fontSizes.medium}
            marginLeft="33%"
          >
            {item.heading}
          </Paragraph>
        </HeadingDiv>
        <ListWrapper>
          <UnorderList>
            {item.options.map(item => (
              <ListItem>{item}</ListItem>
            ))}
          </UnorderList>
        </ListWrapper>
      </OptionWrapper>
    ));

    return (
      <>
        <Card>
          <Image src={firstCard.section} alt="prvý odsek" />
          <Paragraph margin="9px" fontSize={theme.fontSizes.large}>
            {firstCard.title}
          </Paragraph>
          <Paragraph
            margin="38px"
            fontFamily={theme.fontFamilies.dinPro.bold}
            fontSize={theme.fontSizes.medium}
          >
            {firstCard.paragraph}
          </Paragraph>
          <TypeWrapper>{renderFirstCardItems}</TypeWrapper>
          <Paragraph
            margin="40px auto 21px"
            fontFamily={theme.fontFamilies.dinPro.bold}
            fontSize={theme.fontSizes.medium}
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
        <Card alignItems="left">
          <Image src={secondCard.section} alt="druhý odsek" />
          <Paragraph margin="9px auto" fontSize={theme.fontSizes.large}>
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
