import { mobileQuery } from '../../../utils/mediaqueries';

import styled from '@emotion/styled';

const InputWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',

  margin: '30px 10%',

  [mobileQuery]: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default InputWrapper;
