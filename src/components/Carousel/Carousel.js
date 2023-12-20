import axios from 'axios';
import { useQuery } from 'react-query';
import Title from '../micro/ProjectTitle/ProjectTitle';
import Description from '../micro/Description/Description';
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';

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
  const [items, setItems] = useState([]);
  const allowedIds = [525011372, 525972731];
  const { data, isFetching } = useQuery('repos', async () => {
    const response = await axios.get(process.env.REACT_APP_REPOS_URL)
    const filteredItems = response.data.filter(item => allowedIds.includes(item.id));
    setItems(filteredItems);
    //return response.data;
  }, {
    staleTime: 1000 * 600
  })
  const {
    t,
    i18n: { changeLanguage, language },
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
          {items?.slice(0, 3).map((item) => ((
            <SwiperSlide key={item.id}>
              <ContentCarrousel>
                <Card className='card' >
                  <H1>WORK</H1>
                  <Details id='details' >
                    <Title
                      color='black'
                      letterSpacing='2px'
                    >
                      {item.id === 525011372 ? ( 
                        "Login page"
                      ) : item.id === 525972731 && (
                        "Error page"
                      )}
                    </Title>
                    <Description
                      textColor="black"
                      fontWeight='500'
                      textAlign='center'
                    >
                      {item.id === 525011372 ? (
                        "Login page developed in React and AEM."
                      ) : item.id === 525972731 && (
                        "Generic error page developed in React."
                      )}
                    </Description>
                    <Anchor href={item.html_url} target="_blank">
                      <Button
                        background='rgba(255,255,255,0.4)'
                        color='black'
                        width="80%"
                        height="37px"
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