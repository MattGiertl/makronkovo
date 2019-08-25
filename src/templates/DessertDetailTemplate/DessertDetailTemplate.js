import React from 'react';

import styled from '@emotion/styled';
import theme from '../../utils/theme/theme';
import { mobileQuery, tabletQuery, laptopQuery, desktopQuery } from '../../utils/mediaqueries';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from '../../components/atoms/Heading';
import Paragraph from '../../components/atoms/Paragraph';
import Labels from '../../components/atoms/Labels';
import InfoStrip from '../../components/atoms/InfoStrip';
import MobileOnly from '../../components/atoms/MobileOnly';
import ContactInfo from '../../components/atoms/ContactInfo';
import MoreProductsWrapper from '../../components/atoms/MoreProductsWrapper';
import ProductDetailImage from '../../components/atoms/ProducDetailtImage';
import DesktopOnly from '../../components/atoms/DesktopOnly';

import BackButton from '../../components/molecules/BackButton';
import FountainHeading from '../../components/molecules/FountainHeading';
import Price from '../../components/molecules/Price';
import ProductLabel from '../../components/molecules/ProductLabel';
import Polaroid from '../../components/molecules/Polaroid/Polaroid';
import Contact from '../../components/molecules/Contact';

import Layout from '../../components/organisms/Layout/Layout';

const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',

  [mobileQuery]: {
    margin: '0 15px 50px',
  },

  [tabletQuery]: {
    margin: '0 5% 50px',
  },

  [laptopQuery]: {
    margin: '0 10% 50px',
  },

  [desktopQuery]: {
    margin: '0 20% 50px',
  },
});

const DessertDetailTemplate = ({ pageContext }) => {
  const { fontSizes, fontFamilies } = theme;
  const {
    description,
    image,
    weight,
    newPrice,
    oldPrice,
    title,
    isSeasonal,
    isSet,
    productCategoryTitle,
    items,
  } = pageContext;

  const moreProducts = items.filter(item => item.title !== title);

  return (
    <Layout>
      <ContentWrapper>
        <BackButton />
        <MobileOnly>
          <Labels>
            {isSeasonal && <ProductLabel isSeasonal />}
            {oldPrice && <ProductLabel isDiscount />}
            {isSet && <ProductLabel isSet />}
          </Labels>
          <Paragraph margin="10px 0" fontSize={fontSizes.small}>
            {weight}
          </Paragraph>
          <Heading letterSpacing="0" fontFamily={fontFamilies.dinPro.bold} textAlign="left">
            {title}
          </Heading>
          <Price oldPrice={oldPrice} newPrice={newPrice} />
        </MobileOnly>
        <InfoStrip>
          <ProductDetailImage src={image} alt={image} />

          <DesktopOnly>
            <Labels>
              {isSeasonal && <ProductLabel isSeasonal />}
              {oldPrice && <ProductLabel isDiscount />}
              {isSet && <ProductLabel isSet />}
            </Labels>
            <Paragraph margin="10px 0" fontSize={fontSizes.small}>
              {weight}
            </Paragraph>
            <Heading letterSpacing="0" fontFamily={fontFamilies.dinPro.bold} textAlign="left">
              {title}
            </Heading>
            <Price oldPrice={oldPrice} newPrice={newPrice} />
            <Paragraph marginBottom="40px" fontSize={fontSizes.medium}>
              {description}
            </Paragraph>
            <Paragraph marginBottom="20px">
              Objednávku nám prosím písomne zadajte emailom, sms alebo na naše sociálne siete.
            </Paragraph>
            <ContactInfo>
              <div>
                <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
                  <FontAwesomeIcon style={{ marginRight: '4px' }} icon="envelope" />
                  makronkovo@makronkovo.sk
                </Paragraph>
                <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
                  <FontAwesomeIcon style={{ marginRight: '4px' }} icon="phone-alt" />
                  0948 009 800
                </Paragraph>
              </div>

              <div>
                <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
                  <FontAwesomeIcon style={{ marginRight: '4px' }} icon={['fab', 'instagram']} />
                  makronkovo
                </Paragraph>
                <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
                  <FontAwesomeIcon style={{ marginRight: '4px' }} icon={['fab', 'facebook']} />
                  makronkovo
                </Paragraph>
              </div>
            </ContactInfo>
          </DesktopOnly>
        </InfoStrip>

        <MobileOnly>
          <Paragraph margin="60px 0 20px">
            Objednávku nám prosím písomne zadajte emailom, sms alebo na naše sociálne siete.
          </Paragraph>
          <ContactInfo>
            <Contact title="makronkovo@makronkovo.sk" icon="envelope" />
            <Contact icon="phone-alt" title="0948 009 800" />
            <Contact title="makronkovo" icon={['fab', 'instagram']} />
            <Contact title="makronkovo" icon={['fab', 'facebook']} />
          </ContactInfo>
        </MobileOnly>

        <FountainHeading>{`ĎALŠIE ${productCategoryTitle}`}</FountainHeading>
        <MoreProductsWrapper>
          {moreProducts.map(product => (
            <Polaroid shadowed src={product.image} to={product.to}>
              <Paragraph>{product.title}</Paragraph>
              <Paragraph>{product.newPrice}€</Paragraph>
            </Polaroid>
          ))}
        </MoreProductsWrapper>
      </ContentWrapper>
    </Layout>
  );
};

export default DessertDetailTemplate;
