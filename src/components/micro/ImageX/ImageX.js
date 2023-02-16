import React from 'react';
import imge from '../../../assets/62972731.png';
import {
  Container,
  Background,
} from './styles';

function ImageX() {
  return (
    <Container>
      <Background src={imge} alt="avatar" />
    </Container>
  );
}

export default ImageX;