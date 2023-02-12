import styled from "styled-components";
import variables from "../../../styles/variables";

export const Container = styled.div`
	display: flex;
	justify-content: center;
`;

export const Name = styled.p`
	font-family: 'Permanent Marker', cursive;
	color: ${variables.brand.yellow};
	font-size: clamp(0.1em, 0.8em + 2.9vw, 2.25em);
	text-align: center;
  padding-top: 15px;
`;