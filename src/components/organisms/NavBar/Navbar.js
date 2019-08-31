import React, { useState } from 'react';

import NavLink from '../../atoms/NavLink';
import Logo from '../../atoms/Logo';
import SocialButton from '../../atoms/SocialButton';
import MenuToggle from '../../atoms/MenuToggle';
import NavBarWrapper from './NavBarWrapper';
import NavItems from './NavItems';
import SocialButtonGroup from './SocialButtonGroup';
import FacebookIcon from '../../../../static/assets/Facebook.svg';
import InstagramIcon from '../../../../static/assets/Instagram.svg';

const NavBar = () => {
  const [showMenu, toggleMenu] = useState(false);

  return (
    <NavBarWrapper id="NavBarWrapper" showMenu={showMenu}>
      <MenuToggle opened={showMenu} onClick={() => toggleMenu(!showMenu)} />
      <Logo />
      <NavItems showMenu={showMenu} id="NavItems">
        <SocialButtonGroup>
          <SocialButton
            to="https://www.instagram.com/makronkovo/?hl=en"
            marginRight="15px"
            src={InstagramIcon}
          />
          <SocialButton to="https://www.facebook.com/makronkovo/" src={FacebookIcon} />
        </SocialButtonGroup>
        <NavLink to="/torty-na-mieru">TORTY NA MIERU</NavLink>
        <NavLink to="/dezerty">DEZERTY</NavLink>
        <NavLink marginBottom="50px" to="/candy-bar">
          CANDY BAR
        </NavLink>
        <NavLink to="/">
          <Logo show />
        </NavLink>
        <NavLink marginTop="50px" to="/o-nas">
          O NÁS
        </NavLink>
        <NavLink to="/galeria">GALÉRIA</NavLink>
        <NavLink to="/kontakt">KONTAKT</NavLink>
        <NavLink to="/caste-otazky">ČASTÉ OTÁZKY</NavLink>
      </NavItems>
    </NavBarWrapper>
  );
};

export default NavBar;
