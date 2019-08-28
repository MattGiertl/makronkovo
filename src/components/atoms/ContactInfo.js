import styled from '@emotion/styled';
import { laptopQuery, desktopQuery } from '../../utils/mediaqueries';

const ContactInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '70px',

  [laptopQuery]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  [desktopQuery]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default ContactInfo;
