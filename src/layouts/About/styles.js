import styled from "styled-components";

export const Container = styled.div`
	background-color: #252525;
	min-height: 634px;
	display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
	height: 100%;
	display: flex;
	padding: 50px;
	align-items: center;
	justify-content: center;
	@media (max-width: 768px) {
		padding: 50px 20px;
	}
`;

export const DivFlex = styled.div`
  display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const SectionImage = styled.div`
	display: flex;
	width: 40%;
	height: 30%;
	min-width: 230px;
	min-height: 230px;
	justify-content: space-around;

	@media (max-width: 768px) {
  	gap: 0px;
		display: none;
	}
`;

export const SectionAbout = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
	gap: 40px;
	background-color: #252525;

	@media (max-width: 768px) {
		min-height: 570px;
		justify-content: space-evenly;
		width: 100%;
	}
`;