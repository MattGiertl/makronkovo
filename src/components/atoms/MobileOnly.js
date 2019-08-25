import styled from '@emotion/styled';
import { tabletQuery, laptopQuery, desktopQuery } from '../../utils/mediaqueries';

const MobileOnly = styled.div({
  display: 'flex',
  flexDirection: 'column',

  [tabletQuery]: {
    display: 'none',
  },

  [laptopQuery]: {
    display: 'none',
  },
  [desktopQuery]: {
    display: 'none',
  },
});

export default MobileOnly;
