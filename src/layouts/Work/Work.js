import SectionTitle from '../../components/micro/SectionTitle/SectionTitle';
import Carousel from '../../components/Carousel/Carousel';
import imge from '../../assets/62972731.png'
import imge1 from '../../assets/62972731-02.png'
import imge4 from '../../assets/6297271-12.png'
import { useTranslation } from "react-i18next";

import {
  Container,
  Content,
  ImgSection,
  CarouselSection,
  ImgLeft,
  Background,
  ImgCenter,
  ImgRight,
} from './styles';

function Work() {
  const { t, i18n: { language } } = useTranslation();

  return (
    <Container>
      <Content>
        <SectionTitle titleWork={t("work")} />
        <CarouselSection>
          <Carousel />
        </CarouselSection>
          <ImgSection>
            <ImgLeft>
              <Background src={imge1} alt="avatar" />
            </ImgLeft>
            <ImgCenter>
              <Background src={imge} alt="avatar" />
            </ImgCenter>
            <ImgRight>
              <Background src={imge4} alt="avatar" />
            </ImgRight>
          </ImgSection>
      </Content>
    </Container>
  );
}

export default Work;