import React from 'react';

import SlideShowWrapper from './SlideShowWrapper';
import SlideShow from '../../atoms/Slideshow';
import Section from '../../organisms/Section';
import Newsletter from '../../organisms/Newsletter/Newsletter';
import Layout from '../../organisms/Layout/Layout';

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
    </Layout>
  );
};

export default MainPageTemplate;
