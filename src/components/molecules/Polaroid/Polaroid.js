import React from 'react';
import styled from '@emotion/styled';
import Wrapper from './Wrapper';
import Image from './Image';
import Content from './Content';
import Fallback from '../../../../static/assets/Fallback.png';
import { tabletQuery, laptopToDesktopQuery } from '../../../utils/mediaqueries';
import theme from '../../../utils/theme/theme';
import Label from './Label';

const FallBackWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [tabletQuery]: { padding: '50px', border: '1px solid #EDEDED', margin: '0' },
  [laptopToDesktopQuery]: { padding: '50px', border: '1px solid #EDEDED', margin: '0' },
});

// const setLabel = ({ isSeasonal, isDiscount, isSet }) =>{
//   if(isDiscount) return <Label background={theme.colors.green} top='25px'>AKCIA</Label>
//   if(isSeasonal) return <Label background={theme.colors.mediumPink} top='70px'>SEZÓNNE</Label>
//   if(isSet) return <Label background={theme.colors.darkGold} top='25px'>SET</Label>
// }

const Polaroid = ({ children, src, shadowed, to, sm, isSeasonal, isDiscount, isSet }) => (
  <Wrapper shadowed={shadowed} to={to} disabled={!!to} sm={sm}>
    {isSeasonal ? <Label background={theme.colors.mediumPink} top='70px'>SEZÓNNE</Label> : null}
    {isDiscount ? <Label background={theme.colors.green} top='25px'>AKCIA</Label> : null}
    {isSet ? <Label background={theme.colors.darkGold} top='25px'>SET</Label> : null}
    {/* <Label background={theme.colors.green} top='25px'>AKCIA</Label>
    <Label background={theme.colors.mediumPink} top='70px'>SEZÓNNE</Label> */}
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
