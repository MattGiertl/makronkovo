import styled from '@emotion/styled';
import { mobileQuery, tabletToDesktopQuery } from '../../utils/mediaqueries';

const SetCards = styled.div({
  display: 'flex',

  [mobileQuery]: {
    justifyContent: 'space-around',
    margin: '30px 0 -40px',
  },

  [tabletToDesktopQuery]: {
    margin: '40px 0',
  },
});

export default SetCards;
