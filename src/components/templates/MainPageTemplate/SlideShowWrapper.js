import styled from '@emotion/styled';
import {
  mobileQuery,
  laptopQuery,
  desktopQuery,
} from '../../../utils/mediaqueries';

const SlideShowWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',

  [mobileQuery]: {
    width: '100%',
  },

  [laptopQuery]: {
    height: '400px',
    margin: '0 255px',
  },

  [desktopQuery]: {
    height: '400px',
    margin: '0 455px',
  },
});

export default SlideShowWrapper;
