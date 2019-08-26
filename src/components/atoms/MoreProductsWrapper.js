import styled from '@emotion/styled';
import { desktopQuery, laptopQuery } from '../../utils/mediaqueries';

const MoreProductsWrapper = styled.div({
  display: 'flex',
  margin: '0 auto',
  flexWrap: 'wrap',
  justifyContent: 'center',

  [laptopQuery]: {
    maxWidth: '1100px',
  },
  
  [desktopQuery]: {
    maxWidth: '1100px',
  },
});

export default MoreProductsWrapper;
