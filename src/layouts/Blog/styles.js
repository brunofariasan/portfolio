import styled from "styled-components";

export const Container = styled.div`
  height: 700px;
  background: #252525;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  height: 700px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const CarouselSection = styled.div`
  height: 65%;
  display: flex;
  align-items: flex-start;

  @media (max-width: 330px) {
    width: 50%;
	}
`;