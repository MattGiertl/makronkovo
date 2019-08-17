import React from 'react';
import Wrapper from './Polaroid/Wrapper';
import Image from './Polaroid/Image';
import Content from './Polaroid/Content';

const Polaroid = ({ children, src, shadowed }) => (
  <Wrapper shadowed={shadowed}>
    <Image src={src} alt="Polaroid" />
    <Content>{children}</Content>
  </Wrapper>
);

export default Polaroid;
