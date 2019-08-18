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
import Footer from '../../molecules/Footer';
import Section from '../../organisms/Section';

import SlideShowWrapper from './SlideShowWrapper';

import Newsletter from '../../organisms/Newsletter/Newsletter';

library.add(fab, faInstagram, faTimes, faBars, faMapMarkerAlt, faEnvelope, faPhoneAlt);

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

      <Section background={offer.background} heading={offer.heading} id="OfferSection">
        {offerPolaroids}
      </Section>

      <Section heading={discount.heading} price="20" oldPrice="22" id="DiscountedProducts">
        {discountPolaroids}
      </Section>

      <Section heading={instagram.heading} background={instagram.background} id="InstagramSection">
        {instagramPosts}
      </Section>

      <Section spaceAround heading={reference.heading} id="ReferenceSection">
        {referencePolaroids}
      </Section>

      <Section heading="NEWSLETTER">
        <Newsletter />
      </Section>

      <Section team={team.heading} background={team.background} heading="NÁŠ TÝM">
        {teamMembers}
      </Section>
      <Footer />
    </div>
  );
};

export default MainPageTemplate;
