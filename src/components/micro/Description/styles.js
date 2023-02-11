import styled from "styled-components";
import variables from "../../.../../../styles/variables";


export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Text = styled.h1`
	color: ${variables.neutral.neutral100};
	font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
	text-align: initial;
	max-width: 170px;
`;