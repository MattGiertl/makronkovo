import React from 'react';

import styled from '@emotion/styled';
import { mobileQuery } from '../../utils/mediaqueries';

const Pic = styled.div(
  {
    textDecoration: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '200px',
    width: '200px',
    margin: '0 10px',
    marginBottom: '20px',

    [mobileQuery]: {
      width: '120px',
      height: '120px',
      margin: '0 5px',
      marginBottom: '10px',
    },
  },
  props => ({
    backgroundImage: `url(${props.backgroundImage})`,
  }),
);

const PicWithAnchor = Pic.withComponent('a');

const SquarePic = ({ src, href }) => (
  <PicWithAnchor
    backgroundImage={src}
    target="_blank"
    href={href}
    disabled={!href}
  />
);

export default SquarePic;
