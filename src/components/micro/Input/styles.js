import styled from "styled-components";
import variables from "../../../styles/variables";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 7px;
`;

export const Label = styled.label`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #FFFFFF;
`;

export const TextArea = styled.textarea`
	background: rgba(255, 255, 255, 0.25);
	border-radius: 10px;
	border: none;
	padding: 10px;
	border-style: none;
`;

export const Inputs = styled.input`
	background: rgba(255, 255, 255, 0.25);
	border-radius: 10px;
	border: none;
	padding: 10px;
	border-style: none;
`;