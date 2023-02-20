import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 56vh;
  align-items: flex-end;

  @media(max-width: 500px) and (max-height: 725px)  {
    height: 344px;
    width: 20vw;
    align-items: flex-end;
  }
  @media(max-width: 500px) and (max-height: 724px)  {
    max-height: 273px;
  }
`;
