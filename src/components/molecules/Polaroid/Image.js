import styled from '@emotion/styled';
import { mobileQuery } from '../../../utils/mediaqueries';

const Image = styled.img({
  width: '100%',
  height: '70%',
  minHeight: '70%',
  [mobileQuery]: {
    minHeight: '65%',
    marginBottom: '5px'
  }
});

export default Image;
