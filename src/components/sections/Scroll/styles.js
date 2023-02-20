import styled from "styled-components";
import variables from "../../../styles/variables";

export const Container = styled.div`
  height: 34vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ScrollText = styled.div`
  transform: rotate(-90deg);
  display: flex;
  align-items: center;
  height: 30vh; 
  height: 13vh;
  width: 150px;
  align-items: center;
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

