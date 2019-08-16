import React from 'react';

import styled from '@emotion/styled';
import { mobileQuery } from '../../utils/mediaqueries';

const StyledMap = styled.iframe({
  width: '590px',
  height: '390px',
  marginTop: '60px',

  [mobileQuery]: {
    width: '100%',
    margin: '60px 0 40px',
  },
});

const Map = () => (
  <StyledMap
    frameBorder="0"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.430861681838!2d19.139844751638496!3d48.716358279172105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47153ddfaf3eaaab%3A0xb4df25d8de57ab04!2sZvolensk%C3%A1+cesta+85%2C+974+05+Bansk%C3%A1+Bystrica%2C+Slovakia!5e0!3m2!1sen!2scz!4v1565868552093!5m2!1sen!2scz"
  />
);

export default Map;
