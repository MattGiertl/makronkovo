import React from 'react';
import NavBar from '../../organisms/NavBar/Navbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes,
  faBars,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

import theme from '../../../utils/theme/theme';

import { fab, faInstagram } from '@fortawesome/free-brands-svg-icons';

import MainSlideShowPic1 from '../../../../static/img/products-grid1.jpg';
import MainSlideShowPic2 from '../../../../static/img/products-grid2.jpg';
import MainSlideShowPic3 from '../../../../static/img/products-grid3.jpg';

import PolaroidDummy from '../../../../static/img/jumbotron.jpg';

import SlideShow from '../../atoms/Slideshow';
import Button from '../../atoms/Button';
import SquarePic from '../../atoms/SquarePic';
import Paragraph from '../../atoms/Paragraph';
import Footer from '../../molecules/Footer';
import Polaroid from '../../molecules/Polaroid';
import Section from '../../organisms/Section';

import SlideShowWrapper from './SlideShowWrapper';
import LabeledSquarePic from '../../molecules/LabeledSquarePic';

import mainPageData from '../../../data/mock/mainsite.json';
import Newsletter from '../../organisms/Newsletter/Newsletter';

library.add(
  fab,
  faInstagram,
  faTimes,
  faBars,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
);

const MainPageTemplate = () => {
  const { sections } = mainPageData;
  const { offer, discount, reference } = sections;

  const renderDiscountPolaroids = discount.polaroids.map(discount => (
    <Polaroid src={discount.image}>
      <Paragraph bold fontSize={theme.fontSizes.small}>
        {discount.heading}
      </Paragraph>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paragraph
          textDecoration="line-through"
          marginRight="10px"
          fontSize={theme.fontSizes.small}
        >
          {discount.oldPrice}€
        </Paragraph>
        <Paragraph
          textDecoration="line-through"
          marginRight="10px"
          fontSize={theme.fontSizes.small}
        >
          {discount.newPrice}€
        </Paragraph>
      </div>
    </Polaroid>
  ));

  const renderOfferPolaroids = offer.polaroids.map(offer => (
    <Polaroid src={offer.image}>
      <Paragraph
        bold
        desktopFontSize={theme.fontSizes.large}
        laptopFontSize={theme.fontSizes.medium}
      >
        {offer.heading}
      </Paragraph>
    </Polaroid>
  ));

  const renderReferencePolaroids = reference.polaroids.map(reference => (
    <Polaroid src={reference.image}>
      <Paragraph bold textAlign="center" fontSize={theme.fontSizes.small}>
        {reference.author}
      </Paragraph>
      <Paragraph textAlign="center" fontSize={theme.fontSizes.small}>
        {reference.review}
      </Paragraph>
    </Polaroid>
  ));

  return (
    <div>
      <NavBar />
      <SlideShowWrapper>
        <SlideShow>
          <img src={MainSlideShowPic1} alt="Pic1" />
          <img src={MainSlideShowPic2} alt="Pic2" />
          <img src={MainSlideShowPic3} alt="Pic3" />
        </SlideShow>
      </SlideShowWrapper>

      <Section
        spaceAround
        background={offer.background}
        heading={offer.heading}
        id="OfferSection"
      >
        {renderOfferPolaroids}
      </Section>

      <Section
        spaceAround
        heading={discount.heading}
        price="20"
        oldPrice="22"
        id="DiscountedProducts"
      >
        {renderDiscountPolaroids}
      </Section>

      <Section heading="INSTAGRAM @MAKRONKOVO" id="InstagramSection">
        <SquarePic
          href="https://www.instagram.com/makronkovo/"
          src={PolaroidDummy}
        />
        <SquarePic
          href="https://www.instagram.com/makronkovo/"
          src={PolaroidDummy}
        />
        <SquarePic
          href="https://www.instagram.com/makronkovo/"
          src={PolaroidDummy}
        />
        <SquarePic
          href="https://www.instagram.com/makronkovo/"
          src={PolaroidDummy}
        />
      </Section>

      <Section spaceAround heading={reference.heading} id="ReferenceSection">
        {renderReferencePolaroids}
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            marginTop: '40px',
          }}
        >
          <Button onClick={() => alert('NOT IMPLEMENTED YET')}>Viac</Button>
        </div>
      </Section>

      <Section heading="NEWSLETTER">
        <Newsletter />
      </Section>

      <Section heading="NÁŠ TÝM">
        <LabeledSquarePic
          src={PolaroidDummy}
          heading="Darinka"
          description="Šéfka"
        />
        <LabeledSquarePic
          src={PolaroidDummy}
          heading="Darinka"
          description="Šéfka"
        />
        <LabeledSquarePic
          src={PolaroidDummy}
          heading="Darinka"
          description="Šéfka"
        />
        <LabeledSquarePic
          src={PolaroidDummy}
          heading="Darinka"
          description="Šéfka"
        />
      </Section>
      <Footer />
    </div>
  );
};

export default MainPageTemplate;
