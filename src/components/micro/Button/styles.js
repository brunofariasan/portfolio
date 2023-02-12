import styled from "styled-components";
import variables from "../../../styles/variables";


export const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-top: 36px;

	@media(max-width: 550px) {
		padding-top: 10px;
  }
`;

export const StyleButton = styled.button`
	font-family: 'Poppins',sans-serif;
	border: none;
	width: 128px;
	height: 33px;
	cursor: pointer;
	background: ${variables.brand.yellow};
	border-radius: 10px;

	:hover {
		background-color: #f7bb25;
		transition: all 0.4s;
	}
`;