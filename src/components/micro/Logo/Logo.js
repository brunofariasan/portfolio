import logo from '../../../assets/000000.png';
import { 
	Container, 
	LogoImg,
	Img,  
} from './styles';

function Logo() {
	return (
		<Container>
      <LogoImg>
        <Img src={logo} alt="logo"/>  
      </LogoImg>
		</Container>
	);
}

export default Logo;