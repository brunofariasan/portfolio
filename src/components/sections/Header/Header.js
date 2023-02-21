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
  const [backdropFilter, setBackdropFilter] = useState('blur(0px)');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;

      if (position > 20) {
        setHeaderColor('rgba(255, 255, 255, 0.2)')
        setBackdropFilter('blur(50px)');
      } else {
        setHeaderColor('transparent');
        setBackdropFilter('blur(0px)');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container style={{ backgroundColor: headerColor, backdropFilter: backdropFilter }}>
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