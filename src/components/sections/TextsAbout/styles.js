import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: 100%;
	gap: 10px;

	@media (max-width: 768px) {
		align-items: center;
		height: 100%;
	}
`;

export const Content = styled.div`
	  display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: 100%;
	gap: 10px;

	@media (max-width: 768px) {
		align-items: center;
		height: 100%;
	}
`;

export const SectionText = styled.div`
  max-width: 700px;
	padding-top: 10px;
	
	@media (max-width: 768px) {
		text-align: center;
	}
`;