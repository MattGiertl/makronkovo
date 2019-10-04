import styled from '@emotion/styled';
import { mobileQuery, desktopQuery, laptopQuery } from '../../utils/mediaqueries';

const MoreProductsWrapper = styled.div({
  display: 'flex',
  margin: '0 auto',
  flexWrap: 'wrap',
  justifyContent: 'center',

  [mobileQuery]: {
    margin: 0,
  },

  [laptopQuery]: {
    maxWidth: '1100px',
  },
  
  [desktopQuery]: {
    maxWidth: '1100px',
  },
});

export default MoreProductsWrapper;
