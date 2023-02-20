import React from 'react';
import TextsAbout from '../../components/sections/TextsAbout/TextsAbout';
import StyledImageX from '../../components/micro/StyledImageX/StyledImageX';
import DescriptionAboutSkill from '../../components/sections/DescriptionAboutSkill/DescriptionAboutSkill';
import {
  Container,
  Content,
  DivFlex,
  SectionImage,
  SectionAbout,
} from './styles';

const About = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Content>
        <DivFlex>
          <SectionImage>
            <StyledImageX />
          </SectionImage>
          <SectionAbout>
            <TextsAbout />
            <DescriptionAboutSkill />
          </SectionAbout>
        </DivFlex>
      </Content>
    </Container>
  );
});

export default About;