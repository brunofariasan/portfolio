import React from 'react';
import SectionTitle from '../../components/micro/SectionTitle/SectionTitle';
import CarouselBlog from '../../components/CarouselBlog/CarouselBlog';

import {
  Container,
  Content,
  CarouselSection,
} from './styles';

function Blog() {
  return (
    <Container>
      <Content>
        <SectionTitle titleWork='BLOG' />
        <CarouselSection>
          <CarouselBlog />
        </CarouselSection>
      </Content>
    </Container>
  );
}

export default Blog;