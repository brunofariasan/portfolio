import styled from "styled-components";
import variables from "../../.../../styles/variables";

export const Container = styled.div` `;

export const ScrollSection = styled.div`
  position: absolute;
  width: 100px;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-end;
  padding: 0px 0 70px 50px;

  @media (max-width: ${variables.breakpoints.lg}  ) {
    width: 80px;
    padding: 0 0 0 15px;

	}
  @media (max-width: ${variables.breakpoints.sm} ) {
    order: 3;
    position: absolute;
    width: 40px;
    height: 100vh;
    padding: 0 0 0 15px;
	}
  @media (max-width: 768px) {
    height: calc(100vh - 50px);
	}
  @media (max-width: 300px) {
    display: none;
	}
  @media (max-height: 770px) {
  padding: 0px 0 10px 20px;
    
	}
`;

export const Content = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: ${variables.breakpoints.sm}) {
    display: grid;
    align-items: end;
     height: calc(100vh - 50px);
     align-content: center;
	}
`;

export const AvatarSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: calc(100vw - 50px);
	}
  @media (max-width: 500px) {
    display: flex;
    align-items: center;
	}
`;

export const Information = styled.div` 
  display: flex;
  flex-direction: column;
  gap: 20px
`;