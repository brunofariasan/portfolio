import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import Title from '../micro/ProjectTitle/ProjectTitle';
import Description from '../micro/Description/Description';
import { useTranslation } from "react-i18next";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

import './styles.css';
import {
  Container,
  Content,
  ContentCarrousel,
  Anchor,
  Card,
  Details,
  H1,
} from './styles';
import Button from '../micro/Button/Button';

function Carousel() {

  const { data, isFetching } = useQuery('repos', async () => {
    const response = await axios.get('https://api.github.com/users/brunofariasan/repos')
    return response.data;
  }, {
    staleTime: 1000 * 600
  })
  const { 
    t, 
    i18n: {changeLanguage, language},
   } = useTranslation()

  return (
    <Container>
      <Content>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {data?.slice(0, 3).map((data) => ((
            <SwiperSlide key={data.id}>
              <ContentCarrousel>
                <Card className='card' >
                  <H1>WORK</H1>
                  <Details id='details' >
                    <Title
                      color='black'
                      letterSpacing='3px'
                    >
                      {data.topics}
                    </Title>
                    <Description
                      textColor="black"
                      fontWeight='500'
                      textAlign='center'
                    >
                      {data.description}
                    </Description>
                    <Anchor href={data.html_url} target="_blank">
                      <Button
                        background='rgba(255,255,255,0.2)'
                        color='black'
                        width="80%"
                      >
                       
                       {t("buttonMre")}

                      </Button>
                    </Anchor>
                  </Details>
                </Card>
              </ContentCarrousel>
            </SwiperSlide>
          )))}
         
        </Swiper>
      </Content>
    </Container>
  );
}

export default Carousel;