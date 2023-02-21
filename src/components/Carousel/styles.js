import styled from "styled-components";

export const Container = styled.div`
  max-width: 520px;

  .slick-arrow {
   display: none!important;
  }

  @media screen and (max-width: 992){
    width: 520px;
    .Slider {
      padding: 0 10px;
    }
  }
`;

export const Content = styled.div`
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
    @media screen and (max-width: 450px){
      max-width: 140px;
    }
  }
`;

export const ContentCarrousel = styled.div` 
  height: 100%;
`;

export const Anchor = styled.a`
  text-decoration: none;
  width: 100%;
`;

export const Card = styled.div`  
  border-radius: 10px;
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  z-index: -1;
  cursor: pointer;
  transition: 0.98s;
  margin: 10px 0px; 
`; 

export const H1 = styled.span`
  position: absolute;
  top: -20px;
  right: -10px;
  color: rgba(255,255,255,0.1);
  pointer-events: none;
  font-size: 80px;
  
  @media screen and (max-width: 414px){
    font-size: 70px;
    right: -13px;
  }
`;

export const Details = styled.div`
  padding: 14.5px 35px 11px 35px;
  transition: 0.3s ease;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 280px;
  height: 290px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 500px){
    padding: 7.5px 56px 11px 56px;
  }
`;
