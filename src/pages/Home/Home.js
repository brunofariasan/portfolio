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
  const sectionRef = useRef(null);
  return (
    <Container>
      <Navbar />
      <Avatar />
      <About />
      <Work />
      <Blog />
      <LetsTalk />
      <Footer />
    </Container>
  );
}

export default Home;