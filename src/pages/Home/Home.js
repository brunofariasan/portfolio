import React, { useState, useRef } from 'react';
import Navbar from '../../layouts/Navbar/index';
import Avatar from '../../layouts/AvatarInformation/AvatarInformation';
import About from '../../layouts/About/About';
import Work from '../../layouts/Work/Work';
import Blog from '../../layouts/Blog/Blog';
import LetsTalk from '../../layouts/LetsTalk/LetsTalk';
import Footer from '../../layouts/Footer/Footer';


import {
  Container,
  Div,
} from './styles';

const Home = () => {
  const secHomeRef = useRef(null);
  const secAboutRef = useRef(null);
  const secWorkRef = useRef(null);
  const secBlogRef = useRef(null);
  const secLetsTalkRef = useRef(null);

  return (
    <Container>
      <Navbar 
        secHomeRef={secHomeRef}
        secAboutRef={secAboutRef}
        secWorkRef={secWorkRef}
        secBlogRef={secBlogRef}
        secLetsTalkRef={secLetsTalkRef}
      />
      <Avatar ref={secHomeRef}/>
      <About ref={secAboutRef}/>
      <Work ref={secWorkRef}/>
      <Blog ref={secBlogRef}/>
      <LetsTalk ref={secLetsTalkRef}/>
      <Footer />
    </Container>
  );
}

export default Home;