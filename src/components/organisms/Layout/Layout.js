import React from 'react';
import styled from '@emotion/styled';

import './layout.css';

import NavBar from '../NavBar/Navbar';
import Footer from '../../molecules/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes,
  faBars,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

import { fab, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faInstagram, faTimes, faBars, faMapMarkerAlt, faEnvelope, faPhoneAlt);

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100%',
  position: 'relative',
});

const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '90px',
});

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
