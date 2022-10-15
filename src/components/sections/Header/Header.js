import { HiMenuAlt1 } from 'react-icons/hi';
import Logo from '../../micro/Logo/Logo';
import Navbar from './Navbar/Navbar';
import { 
	Container,
	NavbarIcon,
} from "./styles";

export function Header({ setMenuIsVisible }) {

  return (
    <Container>
			<Logo />
      <Navbar />
			<NavbarIcon>
        <HiMenuAlt1 size={35} color="#FFB800" onClick={() => setMenuIsVisible(true)} className="mobile" />
			</NavbarIcon>
    </Container>
  )
}

export default Header;