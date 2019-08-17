import {
  mobileQuery,
  laptopQuery,
  desktopQuery,
  tabletQuery,
} from '../../../utils/mediaqueries';

import styled from '@emotion/styled';

const InputWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',

  [mobileQuery]: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '40px 0',
  },

  [tabletQuery]: {
    margin: '20px 0',
  },

  [laptopQuery]: {
    margin: '50px 560px 20px',
  },

  [desktopQuery]: {
    margin: '50px 560px 25px',
  },
});

export default InputWrapper;
