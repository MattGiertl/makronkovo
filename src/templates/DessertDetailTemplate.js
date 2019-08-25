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

const Labels = styled.div({
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',

  [laptopQuery]: {
    width: 'auto',
  },

  [desktopQuery]: {
    width: 'auto',
  },
});

const ProductImage = styled.img({
  width: '100%',
  marginBottom: '50px',

  [tabletQuery]: {
    width: '60%',
    marginRight: '50px',
  },

  [laptopQuery]: {
    width: '45%',
    marginRight: '100px',
  },

  [desktopQuery]: {
    width: '45%',
    marginRight: '100px',
  },
});

const ContactInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '70px',

  [laptopQuery]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  [desktopQuery]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
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
    items,
  } = pageContext;

  const MobileOnly = styled.div({
    display: 'flex',
    flexDirection: 'column',

    [tabletQuery]: {
      display: 'none',
    },

    [laptopQuery]: {
      display: 'none',
    },
    [desktopQuery]: {
      display: 'none',
    },
  });

  const DesktopOnly = styled.div({
    width: '40%',

    [mobileQuery]: {
      display: 'none',
    },
  });

  const InfoStrip = styled.div({
    display: 'flex',
    marginTop: '50px',
    justifyContent: 'center',

    [mobileQuery]: {
      flexDirection: 'column',
    },
  });

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
            1800g
          </Paragraph>
          <Heading letterSpacing="0" fontFamily={fontFamilies.dinPro.bold} textAlign="left">
            {title}
          </Heading>
          <Price oldPrice={oldPrice} newPrice={newPrice} />
        </MobileOnly>

        <InfoStrip>
          <ProductImage src={image} alt={image} />
          <DesktopOnly>
            <Labels>
              {isSeasonal && <ProductLabel isSeasonal />}
              {oldPrice && <ProductLabel isDiscount />}
              {isSet && <ProductLabel isSet />}
            </Labels>
            <Paragraph margin="10px 0" fontSize={fontSizes.small}>
              1800g
            </Paragraph>
            <Heading letterSpacing="0" fontFamily={fontFamilies.dinPro.bold} textAlign="left">
              {title}
            </Heading>
            <Price oldPrice={oldPrice} newPrice={newPrice} />
            <Paragraph fontSize={fontSizes.medium}>{description}</Paragraph>
            <Paragraph margin="60px 0 20px">
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
        </MobileOnly>

        <FountainHeading>{`ĎALŠIE ${productCategoryTitle}`}</FountainHeading>
        <div
          style={{
            display: 'flex',
            margin: '0 auto',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {items.map(product => (
            <Polaroid shadowed src={product.image} to={product.to}>
              <Paragraph>{product.title}</Paragraph>
              <Paragraph>{product.newPrice}€</Paragraph>
            </Polaroid>
          ))}
        </div>
      </ContentWrapper>
    </Layout>
  );
};

export default DessertDetailTemplate;
