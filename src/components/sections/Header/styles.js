import styled from "styled-components";
import variables from "../../../styles/variables";

export const Container = styled.header`
  background-color: ${variables.neutral.neutral100};
  align-items: center;
  display: flex;
  min-height: 10vh;
  justify-content: space-between;
  padding: 0 50px;

  @media(max-width: 900px) {
    padding: 20px 28px 20px 35px;
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