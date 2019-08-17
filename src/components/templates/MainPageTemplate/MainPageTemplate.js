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

import SlideShow from '../../atoms/Slideshow';
import Button from '../../atoms/Button';
import Footer from '../../molecules/Footer';
import Section from '../../organisms/Section';

import SlideShowWrapper from './SlideShowWrapper';

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
  slideshow,
  offer,
  offerPolaroids,
  discount,
  discountPolaroids,
  instagram,
  instagramPosts,
  reference,
  referencePolaroids,
  team,
  teamMembers,
}) => {
  return (
    <div>
      <NavBar />
      <SlideShowWrapper>
        <SlideShow>
          {slideshow.map(item => (
            <img src={item.image} alt={item.image} key={item.image} />
          ))}
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

      <Section
        heading={instagram.heading}
        background={instagram.background}
        id="InstagramSection"
      >
        {instagramPosts}
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

      <Section
        team={team.heading}
        background={team.background}
        heading="NÁŠ TÝM"
      >
        {teamMembers}
      </Section>
      <Footer />
    </div>
  );
};

export default MainPageTemplate;
