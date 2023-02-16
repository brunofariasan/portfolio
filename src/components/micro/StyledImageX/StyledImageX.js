import React from 'react';
import {
  Container,
  Background,
} from './styles';
import ImageX from '../ImageX/ImageX';

function StyledImageX() {
  return (
    <Container>
      <Background>
        <ImageX />
      </Background>
    </Container>
  );
}

export default StyledImageX;