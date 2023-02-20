import styled from "styled-components";
import variables from "../../../styles/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;    height: 200px;
    justify-content: space-around;
`; 

export const Icon = styled.a`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;

  background: gray;
  border-radius: 100%;
  align-items: center;

  &:hover {
    background-color: black;
	}
  
  @media (max-width: ${variables.breakpoints.sm}) {
    //width: 55px;
	}
  img {
    width: 20px;
    height: 20px;
    
    @media (max-width: ${variables.breakpoints.sm}  ) {
      /* width: 100%;
      height: 100%; */
    }
  }
`; 