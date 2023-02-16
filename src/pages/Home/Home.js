import Navbar from '../../layouts/Navbar/index';
import Avatar from '../../layouts/AvatarInformation/AvatarInformation';
import About from '../../layouts/About/About';
import Work from '../../layouts/Work/Work';
import { 
  Container,
} from './styles';
import LetsTalk from '../../layouts/LetsTalk/LetsTalk';
import Footer from '../../layouts/Footer/Footer';
import Blog from '../../layouts/Blog/Blog';

const Home = () => {
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