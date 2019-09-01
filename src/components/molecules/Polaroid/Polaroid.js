import React from 'react';
import Wrapper from './Wrapper';
import Image from './Image';
import Content from './Content';

const Polaroid = ({ children, src, shadowed, to, sm }) => (
  <Wrapper shadowed={shadowed} to={to} disabled={!!to} sm={sm}>
    <Image src={src} alt="Polaroid" />
    <Content>{children}</Content>
  </Wrapper>
);

export default Polaroid;
