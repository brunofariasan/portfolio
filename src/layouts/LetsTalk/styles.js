import styled from "styled-components";

export const Container = styled.div`
  min-height: 700px;
  background: #252525;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

export const ErrorSection = styled.div`
  font-size: 12px;
  color: red;
  height: 25px;
  padding-left: 5px;
`;

export const SpinnerSection = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  margin: 0px auto;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  left: 0;
  top: 0;
  justify-content: center;
  z-index: 1;
`;

export const Content = styled.div`
  height: 570px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  justify-content: center;
  @media(max-width: 768px) {
    gap: 0px;
    min-height: 700px;
    width: 100%;
  }
`;

export const SectionText = styled.div`
  max-width: 297px;
  max-height: 202px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;

  @media(max-width: 768px) {
    max-width: 100%;
    align-items: center;
  }
`;

export const SectionInput = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;

  @media(max-width: 768px) {
    width: 100%;
  }
  @media(max-width: 668px) {
    width: 100%;
  }
`;

export const SectionFlex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 122px;
  height: 470px;

  @media(max-width: 950px) {
    gap: 100px;
  }
  @media(max-width: 850px) {
    gap: 70px;
  }
  @media(max-width: 768px) {
    flex-direction: column;
    gap: 22px;
    width: 100%;
    height: 615px;
  }
`;