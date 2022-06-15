import backgroundImg from '../../../src/assets/backgroundDashboard.jpg';

import { 
    Container,
    Image 
} from './styles';

export function Background() {
  return (
    <Container>
        <Image src={backgroundImg} alt="Imagem de fundo"/>
    </Container>
  );
}