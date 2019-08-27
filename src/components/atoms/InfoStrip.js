import styled from '@emotion/styled';
import { mobileQuery } from '../../utils/mediaqueries';

const InfoStrip = styled.div({
  display: 'flex',
  marginTop: '50px',
  justifyContent: 'center',

  [mobileQuery]: {
    flexDirection: 'column',
  },
});

export default InfoStrip;
