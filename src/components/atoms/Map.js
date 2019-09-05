import React from 'react';

import styled from '@emotion/styled';
import { mobileQuery } from '../../utils/mediaqueries';

const StyledMap = styled.iframe({
  width: '590px',
  height: '390px',
  margin: '60px 0',

  [mobileQuery]: {
    width: '100%',
    margin: '60px 0 40px',
  },
});

const Map = () => (
  <StyledMap
    frameBorder="0"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.43086167652!2d19.139850216066684!3d48.716358279273734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47153d53b480f2bf%3A0xf405cc77a8759513!2sMAKRONKOVO%20-%20Cukr%C3%A1rska%20manufakt%C3%BAra!5e0!3m2!1sen!2scz!4v1567684490826!5m2!1sen!2scz"
  />
);

export default Map;
