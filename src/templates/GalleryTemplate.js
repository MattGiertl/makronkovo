import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/organisms/Layout/Layout';
import FountainHeading from '../components/molecules/FountainHeading';
import { mobileQuery, tabletQuery, laptopQuery, desktopQuery } from '../utils/mediaqueries';

const ContentWrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: '0 auto',
  [mobileQuery]: {
    width: '100%',
  },

  [tabletQuery]: {
    width: '100%',
  },

  [laptopQuery]: {
    width: '80%',
  },
  [desktopQuery]: {
    width: '80%',
  },
});

const Image = styled.img({
  [mobileQuery]: {
    width: '280px',
    height: '400px',
    margin: '20px 20px',
  },

  [tabletQuery]: {
    width: '300px',
    height: '450px',
    margin: '20px 20px',
  },

  [laptopQuery]: {
    width: '344px',
    height: '500px',
    margin: '20px 20px',
  },
  [desktopQuery]: {
    width: '380px',
    height: '405px',
    margin: '20px 20px',
  },
});

const GalleryTemplate = () => {

const data = useStaticQuery(galleryQuery);
const { nodes: images } = data.allGalleryJson;
const renderImages = images.map(image => (
  <Image
          src={image.src}
          onClick={() => openLightboxOnSource(image.src)}
        />
));

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
  });

  const openLightboxOnSource = source => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      source: source,
    });
  };
  const src = [
    '/img/makronkovo-galeria001.jpg',
    '/img/makronkovo-galeria002.jpg',
    '/img/makronkovo-galeria003.jpg',
    '/img/makronkovo-galeria004.jpg',
    '/img/makronkovo-galeria005.jpg',
    '/img/makronkovo-galeria006.jpg',
    '/img/makronkovo-galeria007.jpg',
    '/img/makronkovo-galeria008.jpg',
    '/img/makronkovo-galeria009.jpg',
  ];
  return (
    <Layout>
      <FountainHeading>GALÉRIA</FountainHeading>
      <ContentWrapper>
        {renderImages}
        <FsLightbox
          toggler={lightboxController.toggler}
          source={lightboxController.source}
          sources={src}
        />
      </ContentWrapper>
    </Layout>
  );
};

const galleryQuery = graphql`
  query GalleryQuery {
  allGalleryJson {
    nodes {
      src
    }
  }
}
`;

export default GalleryTemplate;
