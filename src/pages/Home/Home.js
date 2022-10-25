import Navbar from '../../layouts/Navbar/index';
import Avatar from '../../layouts/AvatarInformation/AvatarInformation';
import About from '../../layouts/About/About';
import Work from '../../layouts/Work/Work';
import { 
  Container,
} from './styles';

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Avatar />
      <About />
      <Work />
    </Container>
  );
}

export default Home;