import React, { useState, useEffect } from 'react';

import { HiMenuAlt1 } from 'react-icons/hi';

import Navbar from './Navbar/Navbar';
import {
  Container,
  NavbarIcon,
} from "./styles";

export function Header({
  setMenuIsVisible,
  secHomeRef,
  secAboutRef,
  secWorkRef,
  secBlogRef,
  secLetsTalkRef
}) {

  const [headerColor, setHeaderColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;

      if (position > 0) {
        setHeaderColor('#1c1919')
      } else {
        setHeaderColor('transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container style={{ backgroundColor: headerColor }}>
      <Navbar
        secHomeRef={secHomeRef}
        secAboutRef={secAboutRef}
        secWorkRef={secWorkRef}
        secBlogRef={secBlogRef}
        secLetsTalkRef={secLetsTalkRef}
      />
      <NavbarIcon>
        <HiMenuAlt1
          size={35}
          color="#FFB800"
          onClick={() => setMenuIsVisible(true)}
          className="mobile"
        />
      </NavbarIcon>
    </Container>
  )
}

export default Header;