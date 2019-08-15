import React from 'react';
import NavBar from '../organisms/NavBar/Navbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes,
  faBars,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { fab, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(
  fab,
  faInstagram,
  faTimes,
  faBars,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
);

const MainPageTemplate = () => (
  <div>
    <NavBar />
  </div>
);

export default MainPageTemplate;
