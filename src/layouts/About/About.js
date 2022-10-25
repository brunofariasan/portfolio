import SectionTitle from '../../components/micro/SectionTitle/SectionTitle';
import { 
  Container,
  Content,
} from './styles';

function About() {
	return (
    <Container>
      <Content>
        <SectionTitle  titleAbout ='ABOUT'/>
      </Content>
    </Container>
	);
}

export default About;