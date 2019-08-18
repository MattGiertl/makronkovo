import React from 'react';

import FountainHeading from '../molecules/FountainHeading';
import NavBar from '../organisms/NavBar/Navbar';

const CollectionTemplate = ({ title }) => {
  return (
    <>
      <NavBar />
      <div>
        <FountainHeading>{title}</FountainHeading>
      </div>
    </>
  );
};

export default CollectionTemplate;
