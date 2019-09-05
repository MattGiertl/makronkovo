import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import theme from '../utils/theme/theme';

import Paragraph from '../components/atoms/Paragraph';
import SquarePic from '../components/atoms/SquarePic';
import LabeledSquarePic from '../components/molecules/LabeledSquarePic';
import Polaroid from '../components/molecules/Polaroid/Polaroid';
import MainPageTemplate from '../templates/MainPageTemplate/MainPageTemplate';

const MainPage = () => {
  const data = useStaticQuery(mainPageQuery);
  const { bannerImages, referenceList, teamMembers } = data.mainpageJson;
  const { nodes: offers } = data.allOffersData;
  const { edges: instagramEdges } = data.allInstagramContent;

  const renderOfferPolaroids = offers.map(offer => (
    <Polaroid src={offer.image} to={offer.to}>
      <Paragraph
        fontFamily={theme.fontFamilies.caslonAntique.regular}
        desktopFontSize={theme.fontSizes.medium}
        laptopFontSize={theme.fontSizes.medium}
      >
        {offer.heading}
      </Paragraph>
    </Polaroid>
  ));

  // const renderDiscountPolaroids = discounts.map(discount => (
  //   <Polaroid src={discount.image} shadowed>
  //     <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} fontSize={theme.fontSizes.small}>
  //       {discount.heading}
  //     </Paragraph>
  //     <div
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}
  //     >
  //       <Paragraph
  //         textDecoration="line-through"
  //         marginRight="10px"
  //         fontSize={theme.fontSizes.small}
  //         fontFamily={theme.fontFamilies.dinPro.regular}
  //       >
  //         {discount.oldPrice}€
  //       </Paragraph>
  //       <Paragraph
  //         fontFamily={theme.fontFamilies.dinPro.regular}
  //         marginRight="10px"
  //         fontSize={theme.fontSizes.small}
  //       >
  //         {discount.newPrice}€
  //       </Paragraph>
  //     </div>
  //   </Polaroid>
  // ));

  const renderInstagramPosts = instagramEdges.map(edge => {
    const { url } = edge.node.images.standard_resolution;

    return <SquarePic src={url} href="https://www.instagram.com/makronkovo/" />;
  });

  const renderReferencePolaroids = referenceList.map(reference => (
    <Polaroid src={reference.image} shadowed>
      <Paragraph
        fontFamily={theme.fontFamilies.dinPro.bold}
        textAlign="center"
        fontSize={theme.fontSizes.small}
      >
        {reference.author}
      </Paragraph>
      <Paragraph
        fontFamily={theme.fontFamilies.dinPro.regular}
        textAlign="center"
        fontSize={theme.fontSizes.small}
      >
        {reference.review}
      </Paragraph>
    </Polaroid>
  ));

  const renderTeamMembers = teamMembers.pictures.map(member => (
    <LabeledSquarePic src={member.image} heading={member.name} description={member.position} />
  ));

  return (
    <MainPageTemplate
      slideshow={bannerImages}
      offerPolaroids={renderOfferPolaroids}
      instagramPosts={renderInstagramPosts}
      referencePolaroids={renderReferencePolaroids}
      teamMembers={renderTeamMembers}
    />
  );
};

const mainPageQuery = graphql`
  query MainPageQuery {
    allOffersJson {
      nodes {
        heading
        image
        to
      }
    }
    mainpageJson {
      bannerImages {
        image
        title
      }
      referenceList {
        author
        image
        review
      }
      teamMembers {
        image
        name
        position
      }
    }
    allInstagramContent(limit: 8) {
      edges {
        node {
          images {
            standard_resolution {
              url
            }
          }
        }
      }
    }
  }
`;

export default MainPage;
