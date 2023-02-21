import styled from "styled-components";
import variables from "../../../styles/variables";

export const Container = styled.div`
	display: flex;
	min-width: 230px;
	min-height: 230px;

	@media (max-width: 768px) {
  	gap: 0px;
		display: none;
	}
`;

export const Background = styled.img`
	height: 100%;
	width: 100%;
	min-width: 230px;
  user-drag: none;

`;