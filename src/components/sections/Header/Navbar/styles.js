import styled from "styled-components";
import variables from "../../../../styles/variables";

export const Container = styled.nav` `;

export const Navbar = styled.div`
  @media(max-width: 900px) {
    Nav {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
	Ul {
		display: flex;
	}
`;

export const Ul = styled.ul`
  A:hover {  
    border-bottom: 2px solid  ${variables.brand.yellow};  
  }
`;

export const Li = styled.li`
  height: 65px;
  width: 105px;
  display: flex;
  align-items: center;
`;

export const A = styled.a`
  color: ${variables.text.dark.title};
  font-size: 16px;
  display: inline-block;
  text-decoration: none;
  transition: background .4s;
  text-transform: uppercase;
`;