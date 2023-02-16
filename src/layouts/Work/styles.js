import styled from "styled-components";

export const Container = styled.div`
  height: 700px;
  background: #020202;
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
`;

export const CarouselSection = styled.div`
  height: 65%;
  display: flex;
  align-items: flex-start;

  @media (max-width: 330px) {
    width: 50%;
	}
`;

export const ImgSection = styled.div`
  position: absolute;
  height: 700px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ImgLeft = styled.div`
  @media (max-width: 900px) {
    display: none;
	}
`;

export const Background = styled.img`
  filter: brightness(50%);
  height: 63%;
  user-drag: none;

  @media (max-width: 500px) {
  width: 100%;
	}
`;

export const ImgCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgRight = styled.div`
  display: flex;
  align-items: flex-end;
  
  @media (max-width: 900px) {
    display: none;
	}
`;
