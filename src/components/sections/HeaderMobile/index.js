import { HiX } from 'react-icons/hi';
import { useEffect } from 'react';
import { 
	Container, 
	Nav, 
	Ul, 
	Li, 
	A, 
	CloseNavbar,
} from './styles';

export function NavbarMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
			<Nav>
				<Ul>
					<Li>
						<A href="#"> HOME </A>
					</Li>
					<Li>
						<A href="#"> ABOUT1 </A>
					</Li>
					<Li>
						<A href="#"> WORK </A>
					</Li>
					<Li>
						<A href="#"> CONTACT </A>
					</Li>
				</Ul>
			</Nav>
			<CloseNavbar>
      	<HiX size={45} color="#FFB800" onClick={() => setMenuIsVisible(false)}/>
			</CloseNavbar>
    </Container>
  )
}