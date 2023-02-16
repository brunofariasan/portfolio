import styled from "styled-components";

export const Container = styled.div` `;

export const LogoImg = styled.div` `;

export const Img = styled.img`
  height: 60px;
	width: 60px;
	filter: grayscale(100%);
	transition: all 0.2s ease;
	cursor: pointer;
	user-drag: none;

	&:hover {
  	filter: grayscale(0%);
	}
`;