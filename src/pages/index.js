import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import theme from '../utils/theme/theme';

import Paragraph from '../components/atoms/Paragraph';
import SquarePic from '../components/atoms/SquarePic';
import LabeledSquarePic from '../components/molecules/LabeledSquarePic';
import Polaroid from '../components/molecules/Polaroid';
import MainPageTemplate from '../templates/MainPageTemplate/MainPageTemplate';

const MainPage = () => {
  const data = useStaticQuery(mainPageQuery);
  const { slideshow, sections } = data.allDataJson.nodes[0];
  const { offer, discount, instagram, reference, team } = sections;

  const renderOfferPolaroids = offer.polaroids.map(offer => (
    <Polaroid src={offer.image}>
      <Paragraph
        fontFamily={theme.fontFamilies.caslonAntique.regular}
        desktopFontSize={theme.fontSizes.large}
        laptopFontSize={theme.fontSizes.medium}
      >
        {offer.heading}
      </Paragraph>
    </Polaroid>
  ));

  const renderDiscountPolaroids = discount.polaroids.map(discount => (
    <Polaroid src={discount.image} shadowed>
      <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} fontSize={theme.fontSizes.small}>
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
          fontFamily={theme.fontFamilies.dinPro.regular}
        >
          {discount.oldPrice}€
        </Paragraph>
        <Paragraph
          fontFamily={theme.fontFamilies.dinPro.regular}
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

  const renderTeamMembers = team.pictures.map(member => (
    <LabeledSquarePic src={member.image} heading={member.name} description={member.position} />
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

const mainPageQuery = graphql`
  query MainPageQuery {
    allDataJson {
      nodes {
        slideshow {
          image
        }
        sections {
          offer {
            heading
            background
            polaroids {
              heading
              image
            }
          }
          discount {
            heading
            background
            polaroids {
              heading
              image
              newPrice
              oldPrice
            }
          }
          instagram {
            heading
            background
            posts {
              image
            }
          }
          reference {
            heading
            background
            polaroids {
              review
              author
              image
            }
          }
          team {
            background
            heading
            pictures {
              image
              name
              position
            }
          }
        }
      }
    }
  }
`;

export default MainPage;
