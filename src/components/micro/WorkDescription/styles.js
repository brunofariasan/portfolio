import styled from "styled-components";
import variables from "../../.../../../styles/variables";

export const Container = styled.div`
	display: flex;
	justify-content: center;
`;

export const Job = styled.p`
	font-weight: 400;
	font-size: clamp(0.1em,0.4em + 2.9vw,1.5em);
	line-height: 36px;
	color: ${variables.text.dark.title};
`;