import styled from "styled-components";
import variables from "../../../styles/variables";


export const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	
	@media(max-width: 550px) {
		padding-top: 10px;
  }
`;

export const StyleButton = styled.button`
	font-family: 'Poppins',sans-serif;
	border: none;
	width: 100%;
	height: 33px;
	cursor: pointer;
	background: ${variables.brand.yellow};
	border-radius: 10px;
	height: 50px;

	:hover {
		background-color: #f7bb25;
		transition: all 0.4s;
	}
`;