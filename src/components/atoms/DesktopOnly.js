import styled from '@emotion/styled';
import { mobileQuery } from '../../utils/mediaqueries';

const DesktopOnly = styled.div({
  width: '40%',

  [mobileQuery]: {
    display: 'none',
  },
});

export default DesktopOnly;
