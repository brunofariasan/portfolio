import styled from "styled-components";
import variables from "../../../styles/variables";

export const Container = styled.div`
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  padding: 0 0 20px 0px;

  @media (max-width: 768px) {
    height: 240px;
    align-content: flex-end;
    padding: 0 0 0px 0px;
  }
`;

export const ScrollText = styled.div`
  transform: rotate(-90deg);
  display: flex;
  align-items: center;
  height: 30vh; 
  height: 120px;
  min-width: 120px;
  align-items: center;

  @media (max-width: 768px) {
    min-width: 100px;
  }
`;

export const Text = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.2em;
  color: ${variables.text.dark.title};
  width: 100%;
  text-align: end;

  @media (max-width: 500px) {
    font-size: 8px;
    line-height: 15px;
  }
`; 