import styled from '@emotion/styled';
import { tabletQuery, laptopQuery, desktopQuery } from '../../utils/mediaqueries';

const ProductImage = styled.img({
  width: '100%',
  marginBottom: '50px',

  [tabletQuery]: {
    width: '60%',
    marginRight: '50px',
  },

  [laptopQuery]: {
    width: '45%',
    marginRight: '100px',
  },

  [desktopQuery]: {
    width: '45%',
    marginRight: '100px',
  },
});

export default ProductImage;
