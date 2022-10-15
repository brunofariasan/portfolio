import styled, { css } from "styled-components";
import variables from "../../../styles/variables";

export const Container = styled.section`
  position: absolute;
  backdrop-filter: blur(40px);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black ${variables.neutral.neutral100};
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: .6s;
  display: flex;
  padding: 0.5rem calc((100vw - 1000px) / 2);

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }

  ${({isVisible}) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > svg {
      transform: rotate(0deg);
    }
  `}
`;

export const Nav = styled.nav` `;

export const Ul = styled.ul`
    text-align: center;
    list-style: none;
    A:hover {  
      /* border-bottom: 2px solid #FFB800;   */
   }
`;

export const Li = styled.li`
  A {
  color: ${variables.text.dark.title};
  font-size: clamp(0.1em, 0.5em + 2.9vw, 1.9em);
  padding: 24px;
  display: inline-block;
  text-decoration: none;
  transition: background .4s;
  }
`;

export const A = styled.a` `;

export const CloseNavbar = styled.div` 
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  padding: 30px 45px 0 0;
`;


