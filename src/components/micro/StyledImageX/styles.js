import styled from "styled-components";
import variables from "../../../styles/variables";

export const Container = styled.div`
  display: flex;
	width: 21%;
	height: 30%;
	min-width: 230px;
	min-height: 230px;

	@media (max-width: 768px) {
  	gap: 0px;
		display: none;
	}
`;

export const Background = styled.div`
  filter: grayscale(80%);
  height: 45%;
	user-drag: none;
	width: 100%;
	min-width: 230px;

  &:hover {
    filter: grayscale(40%);
 	}
`;