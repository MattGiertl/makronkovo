import React from 'react';

import SlideShowWrapper from './SlideShowWrapper';
import SlideShow from '../../components/atoms/Slideshow';
import Section from '../../components/organisms/Section';
import Newsletter from '../../components/organisms/Newsletter/Newsletter';
import Layout from '../../components/organisms/Layout/Layout';
import SEO from '../../components/atoms/SEO';

const MainPageTemplate = ({
  slideshow,
  offerPolaroids,
  // discountPolaroids,
  instagramPosts,
  referencePolaroids,
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
            <img src={item.image} alt={item.title} key={item.title} />
          ))}
        </SlideShow>
      </SlideShowWrapper>

      <Section background="#FCDFEB" heading="PONÚKAME VÁM" id="OfferSection">
        {offerPolaroids}
      </Section>

      {/* <Section heading="ZĽAVNENÉ PRODUKTY" id="DiscountedProducts">
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

      <Section
        maxWidth="1200px"
        mobileMaxWidth="350px"
        spaceAround
        heading="REFERENCIE OD NAŠICH KLIENTOV"
        id="ReferenceSection"
      >
        {referencePolaroids}
      </Section>

      <Section heading="NEWSLETTER">
        <Newsletter />
      </Section>

      <Section heading="NÁŠ TÍM">{teamMembers}</Section>
    </Layout>
  );
};

export default MainPageTemplate;
