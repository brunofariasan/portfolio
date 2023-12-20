import styled from "styled-components";
import variables from "../../../styles/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;    
  height: 335px;
  justify-content: space-around;

  @media (max-height: 1000px) and (max-width: 1200px) {
    height: 250px;
	}
  @media (max-height: 1200px) and (max-width: 1400px) {
    height: 250px;
	}
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
  img {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: ${variables.breakpoints.sm}) {
    width: 25px;
    height: 25px;
    img {
    width: 15px;
    height: 15px;
    }
	}

    @media (max-width: ${variables.breakpoints.sm}  ) {
      /* width: 100%;
      height: 100%; */
    }
`; 