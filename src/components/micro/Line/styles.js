import styled from "styled-components";
import variables from "../../.../../../styles/variables";

export const Container = styled.div`
	display: flex;
	align-items: center;
  transform: rotate(-90deg);
  height: 120px;
  min-width: 100px;
  justify-content: center;
`;

export const Lines = styled.div`
  width: 70px;
  left: 72px;
  border: 1px solid ${variables.text.dark.title};
`;