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
  gap: 44px;
  justify-content: center;
`;

export const SectionText = styled.div`
  max-width: 297px;
  max-height: 202px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
`;

export const SectionInput = styled.div`
  width: 300px;
  display: flex;
  gap: 17px;
  flex-direction: column;
`;

export const SectionFlex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 122px;
  height: 480px;

  @media(max-width: 950px) {
    gap: 100px;
  }
  @media(max-width: 850px) {
    gap: 70px;
  }
  @media(max-width: 768px) {
    flex-direction: column;
    gap: 22px;
  }
`;