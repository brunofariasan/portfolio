import styled from "styled-components";
import variables from "../../../styles/variables";

export const Container = styled.header`
  background-color: ${variables.neutral.neutral100};
  align-items: center;
  display: flex;
  min-height: 80px;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  transition: .6s;
  opacity: 10;
  pointer-events: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transform: translateY(0px);
  justify-content: flex-end;
  
  @media(max-width: 900px) {
    padding: 0px 28px 0px 35px;
    z-index: 3;
    min-height: 50px;
  }
`;

export const NavbarIcon = styled.div`
  display: none;
  @media(max-width: 900px) {
    display: initial;
    display: flex;
    Nav {
      display: none;
    }
  }
`;