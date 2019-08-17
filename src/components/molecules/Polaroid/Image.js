import styled from '@emotion/styled';

import {
  tabletQuery,
  laptopQuery,
  desktopQuery,
} from '../../../utils/mediaqueries';

const Image = styled.img({
  width: '100%',

  [tabletQuery]: {
    height: '177px',
  },

  [laptopQuery]: {
    height: '177px',
  },

  [desktopQuery]: {
    height: '295px',
  },
});

export default Image;
