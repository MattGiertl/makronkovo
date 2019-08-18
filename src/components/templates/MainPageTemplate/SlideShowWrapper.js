import styled from '@emotion/styled';
import { laptopQuery, desktopQuery, mobileQuery, tabletQuery } from '../../../utils/mediaqueries';

const SlideShowWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '60%',
  margin: '0 auto',

  [mobileQuery]: {
    width: '100%',
  },

  [tabletQuery]: {
    width: '90^',
  },

  [laptopQuery]: {
    height: '350px',
  },

  [desktopQuery]: {
    height: '350px',
  },
});

export default SlideShowWrapper;
