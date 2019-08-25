import styled from '@emotion/styled';
import { laptopQuery, desktopQuery } from '../../utils/mediaqueries';

const Labels = styled.div({
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',

  [laptopQuery]: {
    width: 'auto',
  },

  [desktopQuery]: {
    width: 'auto',
  },
});

export default Labels;
