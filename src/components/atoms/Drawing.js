import styled from '@emotion/styled';
import { mobileQuery } from '../../utils/mediaqueries';

const Drawing = styled.img({
  [mobileQuery]: { width: '100%' },
});

export default Drawing;
