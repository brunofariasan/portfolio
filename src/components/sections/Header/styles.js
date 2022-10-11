import styled from "styled-components";

export const Container = styled.header`
  background-color: #020202;
  align-items: center;
  display: flex;
  height: 100px;
  justify-content: space-between;
  padding: 0 50px;
  
  @media(max-width: 900px) {
    padding: 35px 28px 35px 35px;
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

