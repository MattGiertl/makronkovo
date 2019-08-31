import styled from '@emotion/styled';
import { tabletQuery, mobileQuery, laptopToDesktopQuery } from '../../utils/mediaqueries';

const GalleryItem = styled.div(
  {
    textDecoration: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    cursor: 'pointer',

    [mobileQuery]: {
      width: '300px',
      height: '325px',
      margin: '0 20px 20px',
    },
    [tabletQuery]: {
      height: '385px',
      width: '360px',
      margin: '0 5px 10px',
    },
    [laptopToDesktopQuery]: {
      height: '405px',
      width: '380px',
      margin: '0 10px 20px',
    },
  },
  props => ({
    backgroundImage: `url(${props.backgroundImage})`,
  }),
);

export default GalleryItem;
