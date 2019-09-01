import React, { useState } from 'react';
import GalleryTemplate from '../templates/GalleryTemplate';
import { useStaticQuery, graphql } from 'gatsby';
import FsLightbox from 'fslightbox-react';
import GalleryItem from '../components/atoms/GalleryItem';

const Gallery = () => {
  const data = useStaticQuery(galleryQuery);
  const { nodes: images } = data.allGalleryJson;
  const Source = [];
  const renderImages = images.map(image => {
    Source.push(image.src);
    return (
      <GalleryItem backgroundImage={image.src} onClick={() => openLightboxOnSource(image.src)} />
    );
  });

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
  });

  const renderContent = () => {
    return (
      <>
        {renderImages}
        <FsLightbox
          toggler={lightboxController.toggler}
          source={lightboxController.source}
          sources={Source}
        />
      </>
    );
  };

  const openLightboxOnSource = source => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      source: source,
    });
  };

  return <GalleryTemplate renderContent={renderContent()} />;
};

const galleryQuery = graphql`
  query GalleryQuery {
    galleryJson {
      galleryImages {
        image
        title
      }
    }
  }
`;
export default Gallery;
