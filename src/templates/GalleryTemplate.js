import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/organisms/Layout/Layout';
import FountainHeading from '../components/molecules/FountainHeading';
import { mobileQuery,  tabletQuery, laptopQuery, desktopQuery } from '../utils/mediaqueries';

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
    width: '100%',
  },

  [desktopQuery]: {
    width: '85%',
  },
});

const GalleryItem = styled.div({
  display: 'flex',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center', 
  backgroundSize: 'cover',
  [mobileQuery]: {
    maxWidth: '280px',
    maxHeight: '305px',
  },

  [tabletQuery]: {
    maxWidth: '300px',
    maxHeight: '325px',
  },

  [laptopQuery]: {
    maxWidth: '380px',
    maxHeight: '405px',
  },
  [desktopQuery]: {
    maxWidth: '380px',
    maxHeight: '405px',
  },
},
props => ({
  backgroundImage: `url(${props.image})`,
})
);

// const Image = styled.img(
//   {
//     width: 'initial',
//     height: 'initial',
//   },
//   props => ({
//     margin: props.margin,
//     [mobileQuery]: {
//       margin: props.mobileMargin,
//       width: "400px",
//       height: "600px"
//     },

//     [tabletQuery]: {
//       margin: props.tabletMargin,
//     },

//     [laptopQuery]: {
//       margin: props.desktopMargin,
//     },
//     [desktopQuery]: {
//       margin: props.desktopMargin,
//       width: "auto",
//       height: "auto"
//     },
//   }),
// );

const GalleryTemplate = () => {
  const data = useStaticQuery(galleryQuery);
  const { nodes: images } = data.allGalleryJson;
  const renderImages = images.map(image => (
      <GalleryItem image={image.src} onClick={() => openLightboxOnSource(image.src)} />
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
      desktopMargin
      mobileMargin
      tabletMargin
    }
  }
  }
`;

export default GalleryTemplate;
