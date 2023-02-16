import React from 'react';
import TextsAbout from '../../components/sections/TextsAbout/TextsAbout';
import DescriptionAboutSkill from '../../components/sections/DescriptionAboutSkill/DescriptionAboutSkill';
import StyledImageX from '../../components/micro/StyledImageX/StyledImageX';
import {
  Container,
  Content,
  DivFlex,
  SectionImage,
  SectionAbout,
} from './styles';

function About() {
  return (
    <Container>
      <Content>
        <DivFlex>
          <SectionImage>
            <StyledImageX />
          </SectionImage>
          {/* <ImgCenter>
            <Background src={imge} alt="avatar" />
          </ImgCenter> */}
          <SectionAbout>
            <TextsAbout />
            <DescriptionAboutSkill />
          </SectionAbout>
        </DivFlex>
      </Content>
    </Container>
  );
}

export default About;