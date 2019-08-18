import React from 'react';
import '../normalize.css';

import mainPageData from '../data/mock/mainsite.json';

import MainPageTemplate from '../components/templates/MainPageTemplate/MainPageTemplate';
import Polaroid from '../components/molecules/Polaroid';
import Paragraph from '../components/atoms/Paragraph';

import theme from '../utils/theme/theme';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes,
  faBars,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

import { fab, faInstagram } from '@fortawesome/free-brands-svg-icons';
import SquarePic from '../components/atoms/SquarePic';
import LabeledSquarePic from '../components/molecules/LabeledSquarePic';

library.add(
  fab,
  faInstagram,
  faTimes,
  faBars,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
);

const MainPage = () => {
  const { sections, slideshow } = mainPageData;
  const { offer, discount, instagram, reference, team } = sections;

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

  const renderDiscountPolaroids = discount.polaroids.map(discount => (
    <Polaroid src={discount.image} shadowed>
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
          marginRight="10px"
          fontSize={theme.fontSizes.small}
        >
          {discount.newPrice}€
        </Paragraph>
      </div>
    </Polaroid>
  ));

  const renderInstagramPosts = instagram.posts.map(post => (
    <SquarePic src={post.image} href="https://www.instagram.com/makronkovo/" />
  ));

  const renderReferencePolaroids = reference.polaroids.map(reference => (
    <Polaroid src={reference.image} shadowed>
      <Paragraph bold textAlign="center" fontSize={theme.fontSizes.small}>
        {reference.author}
      </Paragraph>
      <Paragraph textAlign="center" fontSize={theme.fontSizes.small}>
        {reference.review}
      </Paragraph>
    </Polaroid>
  ));

  const renderTeamMembers = team.pictures.map(member => (
    <LabeledSquarePic
      src={member.image}
      heading={member.name}
      description={member.position}
    />
  ));

  return (
    <MainPageTemplate
      slideshow={slideshow}
      offer={offer}
      offerPolaroids={renderOfferPolaroids}
      discount={discount}
      discountPolaroids={renderDiscountPolaroids}
      instagram={instagram}
      instagramPosts={renderInstagramPosts}
      reference={reference}
      referencePolaroids={renderReferencePolaroids}
      team={team}
      teamMembers={renderTeamMembers}
    />
  );
};

export default MainPage;
