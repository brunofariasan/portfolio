import styled from "styled-components";
import imagem from '../../assets/page_error.PNG';

export const Container = styled.div`
  .slick-arrow {
   display: none!important;
  }

  @media screen and (max-width: 992){
    width: 520px;
    .Slider {
      padding: 0 10px;
    }
  }

  @media screen and (max-width: 744){
    width: 100%;
    .Slider {
      padding: 0 10px;
    }
  }
`;

export const Content = styled.div`
  p {
    font-size: 12px;
    color: #ffff;
  }

  .slick-list {
    max-width: 850px;
    height: 360px;

    @media screen and (max-width: 992px){
      max-width: 600px;
      padding: 0 10px;
    }

    @media screen and (max-width: 744px){
      max-width: 500px;
    }

    @media screen and (max-width: 600px){
      max-width: 240px;
    }
  }
`;

export const ContentCarrousel = styled.div` `;

export const Anchor = styled.a`
  text-decoration: none;
`;

export const Card = styled.div`
  background: #C4C4C4 center center/ cover;
  background-image: url(${imagem});
  border-radius: 10px;
  height: 150px;
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  z-index: -1;
  cursor: pointer;
  transition: 0.3s;
  margin: 10px 0px; 
 
  &:hover{
    transform: scale(1.1);
  }
`; 

export const Details = styled.div`
  padding: 14.5px;
  background: linear-gradient(0deg, #020202, transparent);
  transition: 0.3s ease;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 280px;
  height: 89px;
  border-radius: 10px;
  transform: translateY(107%);
`;