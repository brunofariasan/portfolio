import axios from 'axios';
import { useQuery } from 'react-query';
import Description from '../micro/Description/Description';
import Slider from "react-slick";
import React from 'react';
import AvatarName from '../micro/AvatarName/AvatarName';

// import { Swiper, SwiperSlide } from "swiper/react";

import '../Carousel/styles.css';
import {
  Container,
  Content,
  ContentCarrousel,
  Anchor,
  Card,
  Details,
  Section,
  TextLink,
} from './styles';

function CarouselBlog() {

  const { data} = useQuery('repos', async () => {
    const response = await axios.get('https://api.github.com/users/brunofariasan/repos')
    return response.data;
  })


  const settings = {
    dots: true,
    infinite: false,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 6,
    initialSlide: 0,

    lazyLoad: false,
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "3px",
    slidesToShow: 3,
    speed: 1000,
    rows: 1,
    slidesPerRow: 1,
    swipeToSlide: true,
    slidesToScroll: 3,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Container>
      <Content>
        <Slider {...settings}>
          {data?.map((data) => ((
            <Section>
              <ContentCarrousel key={data.full_name} >
                <Anchor>
                  <Card className='card' >
                    <Details id='details' >
                      <AvatarName 
                        textColor="#FFB800" 
                        fontSize="24px"
                      >
                        Lorem Ipsum
                      </AvatarName>
                      {/* <Title project={data.topics} />
                      <Description text={data.description} /> */}
                      <Description 
                        textColor="white" 
                        fontWeight='300'
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Faucibus pellentesque lectus leo arcu. 
                        Auctor nulla non est amet, urna a et vestibulum.
                      </Description>
                      <TextLink>Read More</TextLink>
                    </Details>
                  </Card>
                </Anchor>
              </ContentCarrousel>
            </Section>
          )))}
        </Slider>
      </Content>
    </Container>
  );
}
export default CarouselBlog;