import React from 'react';
import styled from '@emotion/styled';

import './layout.css';

import NavBar from '../NavBar/Navbar';
import Footer from '../../molecules/Footer';

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
