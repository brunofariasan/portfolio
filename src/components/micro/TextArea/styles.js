import styled from "styled-components";
import variables from "../../../styles/variables";

export const Container = styled.div`
	display: flex;
	justify-content: center;
`;

export const Text = styled.p`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 300;
	font-size: 16px;
	line-height: 24px;
	color: ${variables.text.light.high};

	  @media (max-width: 738px) {
			text-align: center;
    
	}
`;