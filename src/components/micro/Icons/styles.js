import styled from "styled-components";
import variables from "../../../styles/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`; 

export const Icon = styled.div`
  padding: 26px 20px 0px 20px;
  width: 75px;
  display: flex;
  justify-content: center;

  @media (max-width: ${variables.breakpoints.sm}) {
    width: 55px;
	}
  img {
    width: 25px;
    height: 25px;
    
    @media (max-width: ${variables.breakpoints.sm}  ) {
      width: 100%;
      height: 100%;
    }
  }
`; 