import { mobileQuery, desktopQuery } from '../../../utils/mediaqueries';

import styled from '@emotion/styled';

const InputWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',

  margin: '30px 10%',

  [mobileQuery]: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  [desktopQuery]: {
    justifyContent: 'center',
  },
});

export default InputWrapper;
