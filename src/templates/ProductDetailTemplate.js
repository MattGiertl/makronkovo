import React from 'react';

import styled from '@emotion/styled';
import theme from '../utils/theme/theme';
import { mobileQuery, tabletQuery, laptopQuery, desktopQuery } from '../utils/mediaqueries';
import Fallback from '../../static/assets/Fallback.png';

import Heading from '../components/atoms/Heading';
import Paragraph from '../components/atoms/Paragraph';
import Labels from '../components/atoms/Labels';
import InfoStrip from '../components/atoms/InfoStrip';
import MobileOnly from '../components/atoms/MobileOnly';
import ContactInfo from '../components/atoms/ContactInfo';
import MoreProductsWrapper from '../components/atoms/MoreProductsWrapper';
import ProductDetailImage from '../components/atoms/ProducDetailtImage';
import DesktopOnly from '../components/atoms/DesktopOnly';

import BackButton from '../components/molecules/BackButton';
import FountainHeading from '../components/molecules/FountainHeading';
import Price from '../components/molecules/Price';
import ProductLabel from '../components/molecules/ProductLabel';
import Polaroid from '../components/molecules/Polaroid/Polaroid';
import Contact from '../components/molecules/Contact';

import Layout from '../components/organisms/Layout/Layout';
import SetCard from '../components/molecules/SetCard';
import SetCards from '../components/atoms/SetCards';
import SlideShow from '../components/atoms/Slideshow';
import SEO from '../components/atoms/SEO';
import { toPascalCase } from '../utils/functions';

import SocialButton from '../components/atoms/SocialButton';

const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '1100px',

  [mobileQuery]: {
    margin: '0 15px 50px',
  },

  [tabletQuery]: {
    margin: '0 5% 50px',
  },

  [laptopQuery]: {
    margin: '0 auto 50px',
  },

  [desktopQuery]: {
    margin: '0 auto 50px',
  },
});

const ProductDetailTemplate = ({ pageContext, uri }) => {
  const { fontSizes, fontFamilies } = theme;
  const {
    description,
    images,
    weight,
    price,
    oldPrice,
    title,
    isSeasonal,
    isSet,
    productCategoryTitle,
    products,
    setInfo,
  } = pageContext;

  const moreProducts = products
    ? products.filter(item => item.title !== title)
    : products.filter(item => item.title !== title);

  const productSectionTitle = uri.indexOf('dezerty') !== -1 ? 'Dezerty' : 'Svadby';
  return (
    <Layout>
      <SEO
        title={`${toPascalCase(title)} > ${toPascalCase(
          productCategoryTitle,
        )} > ${productSectionTitle} | MAKRONKOVO`}
      />
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
          {setInfo && (
            <SetCards>
              {setInfo.map(set => (
                <SetCard size={set.size} amount={set.amount} unitSize={set.unitSize} />
              ))}
            </SetCards>
          )}
          {price && <Price oldPrice={oldPrice} price={price} />}
        </MobileOnly>
        <InfoStrip>
          {images ? (
            <SlideShow>
              {images.map(img => (
                <ProductDetailImage src={img.image} alt={img.image} />
              ))}
            </SlideShow>
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '100px',
                border: '1px solid #EDEDED',
                margin: '0 50px 50px 0',
              }}
            >
              <img src={Fallback} alt="Nebol poskytnutý žiadny obrázok" />
            </div>
          )}

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
            {setInfo && (
              <SetCards>
                {setInfo.map(set => (
                  <SetCard size={set.size} amount={set.amount} unitSize={set.unitSize} />
                ))}
              </SetCards>
            )}

            {price && <Price oldPrice={oldPrice} price={price} />}
            <Paragraph lineHeight="24px" marginBottom="40px" fontSize={fontSizes.medium}>
              {description}
            </Paragraph>
            <Paragraph marginBottom="20px">
              Objednávku nám prosím písomne zadajte emailom, sms alebo na naše sociálne siete.
            </Paragraph>
            <ContactInfo>
              <div>
                <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
                  <SocialButton marginRight="8px" icon="mail" />
                  makronkovo@makronkovo.sk
                </Paragraph>
                <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
                  <SocialButton marginRight="8px" icon="instagram" />
                  makronkovo
                </Paragraph>
              </div>

              <div>
                <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
                  <SocialButton marginRight="8px" icon="telephone" />
                  0948 009 800
                </Paragraph>
                <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
                  <SocialButton marginRight="8px" icon="facebook" />
                  makronkovo
                </Paragraph>
              </div>
            </ContactInfo>
          </DesktopOnly>
        </InfoStrip>

        <MobileOnly>
          <Paragraph lineHeight="24px" fontSize={fontSizes.medium}>
            {description}
          </Paragraph>
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
              <Paragraph textAlign="center" lineHeight="24px">
                {product.title}
              </Paragraph>
              {price && <Paragraph lineHeight="24px">{product.price}€</Paragraph>}
            </Polaroid>
          ))}
        </MoreProductsWrapper>
      </ContentWrapper>
    </Layout>
  );
};

export default ProductDetailTemplate;
