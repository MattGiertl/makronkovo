import React from 'react';
import styled from '@emotion/styled';
import Hamburger from '../../../static/assets/Hamburger.svg';
import CloseBtn from '../../../static/assets/CloseBtn.svg';

import { mobileToTabletQuery } from '../../utils/mediaqueries';

const StyledIcon = styled.img({
  display: 'none',
  position: 'absolute',
  height: '21px',
  width: '34px',

  [mobileToTabletQuery]: {
    display: 'flex',
    top: '80px',
    right: '7%',
  },
});


const MenuToggle = ({ opened, onClick }) => {
  const icon = opened ? CloseBtn : Hamburger;

  return <StyledIcon src={icon} onClick={onClick} />;
};

export default MenuToggle;
