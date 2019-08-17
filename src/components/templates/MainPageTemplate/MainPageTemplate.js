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

import { fab, faInstagram } from '@fortawesome/free-brands-svg-icons';

import MainSlideShowPic1 from '../../../../static/img/products-grid1.jpg';
import MainSlideShowPic2 from '../../../../static/img/products-grid2.jpg';
import MainSlideShowPic3 from '../../../../static/img/products-grid3.jpg';

import PolaroidDummy from '../../../../static/img/jumbotron.jpg';

import SlideShow from '../../atoms/Slideshow';
import Button from '../../atoms/Button';
import SquarePic from '../../atoms/SquarePic';
import Footer from '../../molecules/Footer';
import Section from '../../organisms/Section';

import SlideShowWrapper from './SlideShowWrapper';
import LabeledSquarePic from '../../molecules/LabeledSquarePic';

import Newsletter from '../../organisms/Newsletter/Newsletter';
import styled from '@emotion/styled';

library.add(
  fab,
  faInstagram,
  faTimes,
  faBars,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
);

const ButtonWrapper = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  marginTop: '40px',
});

const MainPageTemplate = ({
  offerPolaroids,
  discountPolaroids,
  referencePolaroids,
  offer,
  discount,
  reference,
}) => {
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
        {offerPolaroids}
      </Section>

      <Section
        spaceAround
        heading={discount.heading}
        price="20"
        oldPrice="22"
        id="DiscountedProducts"
      >
        {discountPolaroids}
        <ButtonWrapper>
          <Button onClick={() => alert('NOT IMPLEMENTED YET')}>Viac</Button>
        </ButtonWrapper>
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
        {referencePolaroids}
        <ButtonWrapper>
          <Button onClick={() => alert('NOT IMPLEMENTED YET')}>Viac</Button>
        </ButtonWrapper>
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
