import styled from "styled-components";
import variables from "../../.../../styles/variables";

export const Container = styled.div` `;

export const ScrollSection = styled.div`
  position: absolute;
  width: 100px;
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${variables.breakpoints.lg}  ) {
    width: 80px;
	}
  @media (max-width: ${variables.breakpoints.sm} ) {
    order: 3;
    position: absolute;
    width: 40px;
    height: 80vh;

	}
  @media (max-width: 300px) {
    display: none;
	}
`;

export const Content = styled.div`
  display: flex;
  height: 86vh;

  @media (max-width: ${variables.breakpoints.sm}) {
    display: grid;
	}
`;

export const AvatarSection = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    width: 100vw;
    height: 450px;
    height: 77vh;
    display: flex;
    align-items: center;
	}
`;

export const Information = styled.div` `;