import axios from 'axios';
import { useQuery } from 'react-query';
import Title from '../micro/ProjectTitle/ProjectTitle';
import Description from '../micro/Description/Description';
import Slider from "react-slick";

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

const { data, isFetching } = useQuery('repos', async () => {
  const response = await axios.get('https://api.github.com/users/brunofariasan/repos')
  return response.data;
})
  const settings = {
    lazyLoad: false,
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 1000,
    rows: 2,
    slidesPerRow: 1,
    swipeToSlide: true,
    slidesToScroll: 4,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "-70px",
        }
      },
      {
        breakpoint: 744,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "-10px"
        }
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        }
      }
    ]
  };

	return (
    <Container>
      <Content>

        { isFetching && <p>Carregando ...</p> }
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
                      <Description text={data.description} />
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