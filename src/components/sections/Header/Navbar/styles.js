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

export const LanguageSelectionSession = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;    
`;

export const IdiomaName = styled.div`
  width: 80px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  gap: 8px;
  cursor: pointer;
  background-color: transparent;  
`;

export const Idioma = styled.h3`
  color: white;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const SectionButton = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  position: absolute;
  top: 48px;
  gap: 5px;
`;

export const A = styled.a`
  color: ${variables.text.dark.title};
  font-size: 16px;
  display: inline-block;
  text-decoration: none;
  transition: background .4s;
  text-transform: uppercase;
`;