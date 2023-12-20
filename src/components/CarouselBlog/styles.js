import styled from "styled-components";

export const Container = styled.div`
  max-width: 920px;
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
    max-width: 1050px;
    height: 100%;

    @media screen and (max-width: 992px){
      max-width: 600px;
      padding: 0 10px;
    }
    @media screen and (max-width: 744px){
      max-width: 600px;
    }
    @media screen and (max-width: 650px){
      max-width: 300px;
    }
  }
`;

export const Section = styled.div` `;

export const ContentCarrousel = styled.div`
  height: 378px;
  width: 274px;
  background: #020202;
  border-radius: 20px;
  -webkit-user-drag: none;
    user-drag: none;
    -webkit-touch-callout: none; 
`;

export const Anchor = styled.a`
  text-decoration: none;
  -webkit-user-drag: none; 
    user-drag: none;
    -webkit-touch-callout: none;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  z-index: -1;
  cursor: pointer;
  transition: 0.98s;
  padding: 35px 34px 20px 34px;
`; 

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 320px;
  justify-content: space-around;
`;

export const TextLink = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #FFB800;
`;