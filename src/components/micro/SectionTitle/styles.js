import styled from "styled-components";
import variables from "../../.../../../styles/variables";

export const Container = styled.div`
	display: flex;
	align-items: center;
	//padding: 0% 0% 10px 0%;
	justify-content: center;
`;

export const Title = styled.h1`
	color: ${variables.text.dark.title};
	padding: 0% 4% 0% 0%;
	font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
`;