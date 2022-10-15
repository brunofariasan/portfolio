import {
	Container,
	Navbar,
	Nav, 
	Ul, 
	Li, 
	A,
} from "./styles";

export function Header() {
	
  return (
		<Container>
			<Navbar>
				<Nav>
					<Ul>
						<Li>
							<A href="#">HOME</A>
						</Li>
						<Li>
							<A href="#">ABOUT</A>
						</Li>
						<Li>
							<A href="#">WORK</A>
						</Li>
						<Li>
							<A href="#">CONTACT</A>
						</Li>
					</Ul>
				</Nav>
			</Navbar>
		</Container>
  )
}
export default Header;