import React from 'react';
import styled from '@emotion/styled';
import Wrapper from './Wrapper';
import Image from './Image';
import Content from './Content';
import Fallback from '../../../../static/assets/Fallback.png';
import { tabletQuery, laptopToDesktopQuery } from '../../../utils/mediaqueries';

const FallBackWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [tabletQuery]: { padding: '50px', border: '1px solid #EDEDED', margin: '0' },
  [laptopToDesktopQuery]: { padding: '50px', border: '1px solid #EDEDED', margin: '0' },
});

const Polaroid = ({ children, src, shadowed, to, sm }) => (
  <Wrapper shadowed={shadowed} to={to} disabled={!!to} sm={sm}>
    {src ? (
      <Image src={src} alt="Polaroid" />
    ) : (
      <FallBackWrapper>
        <img src={Fallback} alt="Nebol poskytnutý žiadny obrázok" />
      </FallBackWrapper>
    )}
    <Content>{children}</Content>
  </Wrapper>
);

export default Polaroid;
