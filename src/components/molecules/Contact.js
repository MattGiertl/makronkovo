import React from 'react';
import theme from '../../utils/theme/theme';

import Paragraph from '../atoms/Paragraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = ({ title, icon }) => {
  return (
    <Paragraph fontFamily={theme.fontFamilies.dinPro.bold} lineHeight="24px">
      <FontAwesomeIcon style={{ marginRight: '4px' }} icon={icon} />
      {title}
    </Paragraph>
  );
};

export default Contact;
