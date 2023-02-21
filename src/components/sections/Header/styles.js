import styled from "styled-components";
import variables from "../../../styles/variables";

export const Container = styled.header`
  background-color: ${variables.neutral.neutral100};
  align-items: center;
  display: flex;
  min-height: 10vh;
  justify-content: space-between;
  padding: 0 50px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  transition: .6s;
  opacity: 10;
  pointer-events: auto;
  transform: translateY(0px);
  
  @media(max-width: 900px) {
    padding: 20px 28px 20px 35px;
    z-index: 3;
  }
`;

export const NavbarIcon = styled.div`
  display: none;
  @media(max-width: 900px) {
    display: initial;
    Nav {
      display: none;
    }
  }
`;