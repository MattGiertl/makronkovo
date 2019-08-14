import { mobileQuery, tabletQuery } from '../../../utils/mediaqueries';

import styled from '@emotion/styled';

const SocialButtonGroup = styled.div({
  display: 'flex',

  [mobileQuery]: {
    width: '100%',
    justifyContent: 'center',
    margin: '25px 0 15px 0',
  },

  [tabletQuery]: {
    width: '100%',
    justifyContent: 'center',
    margin: '25px 0 15px 0',
  },
});

export default SocialButtonGroup;
