import React from 'react';

import styled from '@emotion/styled';
import { mobileQuery } from '../../utils/mediaqueries';

const Pic = styled.div(
  {
    textDecoration: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '225px',
    width: '225px',
    margin: '0 10px 20px',

    [mobileQuery]: {
      width: '140px',
      height: '140px',
      margin: '0 5px 10px',
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
