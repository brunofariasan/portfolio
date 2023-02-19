import axios from 'axios';
import { useQuery } from 'react-query';
import Description from '../micro/Description/Description';
import Slider from "react-slick";
import React from 'react';
import AvatarName from '../micro/AvatarName/AvatarName';
import { carouselSettings } from './Settings';
import { useTranslation } from "react-i18next";

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
  const { 
    t, 
    i18n: {changeLanguage, language},
   } = useTranslation()

  const { data, isFetching } = useQuery('blog', async () => {
    const response = await axios.get('https://v1.nocodeapi.com/brunno97/medium/VhNmBdMPdLQjyBKR')
    return response.data;
  }, {
    staleTime:  1000 * 600
  })

    // async function handleRepos () {
    //     const prev = queryClient.getQueryData('blog')

    //     const nextRepos = prev.map(repo => {
    //         if(prev){
    //           const nextReposs = prev.map(repo => {
    //               if (blog.author ==)
    //           })
    //         }
    //     })
    // }
 
  //   dots: true,
  //   infinite: false,
  //   speed: 5000,
  //   slidesToShow: 1,
  //   slidesToScroll: 6,
  //   initialSlide: 0,

  //   lazyLoad: false,
  //   dots: true,
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "3px",
  //   slidesToShow: 3,
  //   speed: 1000,
  //   rows: 1,
  //   slidesPerRow: 1,
  //   swipeToSlide: true,
  //   slidesToScroll: 3,
  //   initialSlide: 3,
  //   responsive: [
  //     {
  //       breakpoint: 1000,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 650,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  function removePTag(text) {
    // Remove as tags <p> e <img>
    text = text.replace(/<\/?p[^>]*>/g, '');
    text = text.replace(/<img[^>]*>/g, '');

    // Remove os links
    text = text.replace(/<a[^>]*>([^<]*)<\/a>/g, '$1');
    return text;
  }
  return (
    <Container>
      <Content>
        <Slider {...carouselSettings}>
          {data?.map((data) => ((
            <Section>
              <ContentCarrousel key={data.published} >
                <Anchor href={data.link} target="_blank">
                  <Card className='card' >
                    <Details id='details'>
                      <AvatarName
                        textColor="#FFB800"
                        fontSize="24px"
                      >
                        {data.title}
                      </AvatarName>
                      <Description
                        textColor="white"
                        fontWeight='300'
                      >
                        {removePTag(data.content).slice(0, 150) + " ..."}
                      </Description>
                      <TextLink>{t("buttonMre")}</TextLink>
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