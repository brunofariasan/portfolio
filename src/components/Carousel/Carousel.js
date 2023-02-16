import axios from 'axios';
import { useQuery } from 'react-query';
import Title from '../micro/ProjectTitle/ProjectTitle';
import Description from '../micro/Description/Description';
import React from 'react';

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

function Carousel() {

const { data } = useQuery('repos', async () => {
  const response = await axios.get('https://api.github.com/users/brunofariasan/repos')
  return response.data;
})

	return (
    <Container>
      <Content>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
            {data?.map((data) =>(( 
              <SwiperSlide>
              <ContentCarrousel key={data.full_name} >
                <Anchor href={data.homepage ? data.homepage : data.html_url }>
                  <Card className='card' >
                    <H1>WORK</H1>
                    <Details id='details' >
                      <Title project={data.topics} />
                      <Description 
                        textColor="black" 
                        fontWeight='500'
                      >
                        {data.description}
                      </Description>
                    </Details>
                  </Card>
                </Anchor>
              </ContentCarrousel>
              </SwiperSlide>
            )))}
        </Swiper>
      </Content>
    </Container>
	);
}

export default Carousel;