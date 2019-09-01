import React from 'react';
import styled from '@emotion/styled';
import FountatainImg from '../../../static/assets/Fountain.svg';

const StyledFountain = styled.img({
  margin: '0 auto',
  width: '42px',
});

const Fountain = () => <StyledFountain src={FountatainImg} alt="Fontánka" />;

export default Fountain;
