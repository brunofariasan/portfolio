import React from 'react';
import SectionTitle from '../../components/micro/SectionTitle/SectionTitle';
import CarouselBlog from '../../components/CarouselBlog/CarouselBlog';

import {
  Container,
  Content,
  CarouselSection,
} from './styles';

const Blog = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Content>
        <SectionTitle titleWork='BLOG' />
        <CarouselSection>
          <CarouselBlog />
        </CarouselSection>
      </Content>
    </Container>
  );
});

export default Blog;