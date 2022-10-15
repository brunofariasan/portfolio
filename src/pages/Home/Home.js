import Navbar from '../../layouts/Navbar/index';
import Avatar from '../../layouts/AvatarInformation/AvatarInformation';
import { 
  Container,
} from './styles';

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Avatar />
    </Container>
  );
}

export default Home;