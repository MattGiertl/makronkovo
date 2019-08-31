import React, { useState } from 'react';
import GalleryTemplate from '../templates/GalleryTemplate';
import { useStaticQuery, graphql } from 'gatsby';
import FsLightbox from 'fslightbox-react';
import GalleryItem from '../components/atoms/GalleryItem';

const Gallery = () => {
  const data = useStaticQuery(galleryQuery);
  const { images } = data.galleryJson;
  const Source = [];
  const renderImages = images.map(image => {
    Source.push(image.image);
    return (
      <GalleryItem
        backgroundImage={image.image}
        onClick={() => openLightboxOnSource(image.image)}
      />
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
      images {
        image
      }
    }
  }
`;
export default Gallery;
