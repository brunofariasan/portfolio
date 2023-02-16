import styled from "styled-components";

export const Container = styled.div` `;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: 100%;
	gap: 15px;

	@media (max-width: 768px) {
		align-items: center;
		height: 100%;
	}
`;

export const SectionLogo = styled.div`
	display: flex;
	gap: 50px;
	align-items: center;

	@media (max-width: 1400px) {
		width: 100%;
		flex-wrap: wrap;
	}
	@media (max-width: 768px) {
		justify-content: center;
		gap: 30px;
	}
`;