import React from 'react';
import Icon from '../../components/sections/SocialIcon/SocialIcon';
import LineScroll from '../../components/sections/Scroll/Scroll';
import Avatar from '../../components/micro/Avatar/Avatar';
import AvatarText from '../../components/sections/AvatarText/AvatarText';

import { 
	Container,
  ScrollSection,
  Content,
  AvatarSection,
  Information,
} from "./styles";

const AvatarInformation = React.forwardRef((props, ref) => {

  return (
    <Container ref={ref}>
      <Content>
        <ScrollSection>
          <Icon />
          <LineScroll />
        </ScrollSection>
        <AvatarSection>
          <Information>
            <Avatar />
            <AvatarText />
          </Information>
        </AvatarSection>
      </Content>
    </Container>
  )
});

export default AvatarInformation;