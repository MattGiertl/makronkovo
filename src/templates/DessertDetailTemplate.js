import React from 'react';
import Layout from '../components/organisms/Layout/Layout';
import styled from '@emotion/styled';
import { mobileQuery, tabletQuery, laptopQuery, desktopQuery } from '../utils/mediaqueries';
import BackButton from '../components/molecules/BackButton';
import ProductLabel from '../components/molecules/ProductLabel';
import theme from '../utils/theme/theme';
import Paragraph from '../components/atoms/Paragraph';
import Heading from '../components/atoms/Heading';
import Price from '../components/molecules/Price';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FountainHeading from '../components/molecules/FountainHeading';
import Polaroid from '../components/molecules/Polaroid/Polaroid';

const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',

  [mobileQuery]: {
    margin: '0 35px 50px',
  },

  [tabletQuery]: {
    margin: '0 5% 50px',
  },

  [laptopQuery]: {
    margin: '0 15% 50px',
  },

  [desktopQuery]: {
    width: '1300px',
    margin: '70px auto 50px',
  },
});

const Labels = styled.div({
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
});

const ProductImage = styled.img({
  width: '100%',
  marginBottom: '50px',
});

const ContactInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '70px',
});

const DessertDetailTemplate = ({ pageContext }) => {
  const { fontSizes, fontFamilies } = theme;
  const {
    description,
    image,
    newPrice,
    oldPrice,
    title,
    isSeasonal,
    isSet,
    productCategoryTitle,
    moreProducts,
  } = pageContext;

  return (
    <Layout>
      <ContentWrapper>
        <BackButton />
        <Labels>
          {isSeasonal && <ProductLabel isSeasonal />}
          {oldPrice && <ProductLabel isDiscount />}
          {isSet && <ProductLabel isSet />}
        </Labels>
        <Paragraph margin="10px 0" fontSize={fontSizes.small}>
          1800g
        </Paragraph>
        <Heading fontFamily={fontFamilies.dinPro.bold} textAlign="left">
          {title}
        </Heading>
        <Price oldPrice={oldPrice} newPrice={newPrice} />
        <ProductImage src={image} alt={image} />
        <Paragraph fontSize={fontSizes.medium}>{description}</Paragraph>
        <Paragraph margin="60px 0 20px">
          Objednávku nám prosím písomne zadajte emailom, sms alebo na naše sociálne siete.
        </Paragraph>

        <ContactInfo>
          <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
            <FontAwesomeIcon style={{ marginRight: '4px' }} icon="envelope" />
            makronkovo@makronkovo.sk
          </Paragraph>
          <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
            <FontAwesomeIcon style={{ marginRight: '4px' }} icon="phone-alt" />
            0948 009 800
          </Paragraph>
          <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
            <FontAwesomeIcon style={{ marginRight: '4px' }} icon={['fab', 'instagram']} />
            makronkovo
          </Paragraph>
          <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
            <FontAwesomeIcon style={{ marginRight: '4px' }} icon={['fab', 'facebook']} />
            makronkovo
          </Paragraph>
        </ContactInfo>
        <FountainHeading>{`ĎALŠIE ${productCategoryTitle}`}</FountainHeading>
        {moreProducts.map(product => (
          <Polaroid shadowed src={product.src} to={product.to}>
            {product.title}
          </Polaroid>
        ))}
      </ContentWrapper>
    </Layout>
  );
};

export default DessertDetailTemplate;
