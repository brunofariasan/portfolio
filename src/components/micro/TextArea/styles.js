import styled from "styled-components";
import variables from "../../../styles/variables";

export const Container = styled.div`
	display: flex;
	justify-content: center;
`;

export const Text = styled.p`
	//font-size: clamp(0.1em,0.4em + 2.9vw,1.5em);
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 300;
	font-size: 16px;
	line-height: 24px;
	//color: #FFFFFF;
	color: ${variables.text.light.high};
`;