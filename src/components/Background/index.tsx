import React from 'react';

import backgroundImg from '../../../src/assets/background-image.png';

import { 
    Container,
    Image 
} from './styles';

export function Background() {
  return (
    <Container>
        <Image src={backgroundImg} alt="Image de fundo"/>
    </Container>
  );
}