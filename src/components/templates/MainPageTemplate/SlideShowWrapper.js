import styled from '@emotion/styled';
import { laptopQuery, desktopQuery, mobileQuery, tabletQuery } from '../../../utils/mediaqueries';

const SlideShowWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '60%',
  margin: '0 auto',
  height: '300px',

  [mobileQuery]: {
    width: '100%',
  },

  [tabletQuery]: {
    width: '90%',
  },

  [laptopQuery]: {
    width: '65%',
  },

  [desktopQuery]: {
    width: '750px',
    height: '325px',
    marginTop: '-66px',
  },
});

export default SlideShowWrapper;
