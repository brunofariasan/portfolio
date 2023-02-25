import styled from "styled-components";
import variables from "../../.../../../styles/variables";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	img {
    border-radius: 50%;
    height: 250px;
    width: 250px;
  }
`;

export const ImageAvatar = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  //Animação
  width: 220px;
  height: 220px;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  overflow: hidden;
  animation: morph 3s linear infinite;
  
  @keyframes morph {
    0%, 100%{
      border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    }
    34% {
      border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
    }
    67% {
      border-radius: 70% 60% 60% 100% / 100% 100% 60% 60%;
    }
  }
  //Fim animação
  @media (max-width: ${variables.breakpoints.md}) {
    height: 40%;
    width: 40%;
	}
  img {
    border-radius: 50%;
    height: 250px;
    width: 250px;
  }
  img{
    @media (max-width:  ${variables.breakpoints.md}) {
      height: 100%;
      width: 100%;
    }
  }
`;

export const Img = styled.img`
  user-drag: none;
`;