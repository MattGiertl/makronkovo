import React from 'react';

import SlideShowWrapper from './SlideShowWrapper';
import SlideShow from '../../components/atoms/Slideshow';
import Section from '../../components/organisms/Section';
import Newsletter from '../../components/organisms/Newsletter/Newsletter';
import Layout from '../../components/organisms/Layout/Layout';
import SEO from '../../components/atoms/SEO';

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
    <Layout>
      <SEO
        title="MAKRONKOVO - Cukrárska manufaktúra"
        description="Torty na mieru, dezerty a candy bary ktoré spôsobujú závislosti. To je Makronkovo, cukrárska manufaktúra v Banskej Bystrici."
      />
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

      {/* <Section heading={discount.heading} price="20" oldPrice="22" id="DiscountedProducts">
        {discountPolaroids}
      </Section> */}

      <Section
        heading="INSTAGRAM @MAKRONKOVO"
        id="InstagramSection"
        maxWidth="1000px"
        mobileMaxWidth="350px"
      >
        {instagramPosts}
      </Section>

      <Section spaceAround heading={reference.heading} id="ReferenceSection">
        {referencePolaroids}
      </Section>

      <Section heading="NEWSLETTER">
        <Newsletter />
      </Section>

      {/* <Section team={team.heading} background={team.background} heading="NÁŠ TÝM">
        {teamMembers}
      </Section> */}
    </Layout>
  );
};

export default MainPageTemplate;
