import SectionTitle from '../../components/micro/SectionTitle/SectionTitle';
import Carousel from '../../components/Carousel/Carousel';
import { 
  Container,
  Content,
} from './styles';

function Work() {
	return (
    <Container>
      <Content>
        <SectionTitle  titleWork ='WORK'/>
        <Carousel />
     </Content>
    </Container>
	);
}

export default Work;