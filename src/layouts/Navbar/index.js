import { useState } from "react";
import { Header } from "../../components/sections/Header/Header";
import { NavbarMobile } from "../../components/sections/HeaderMobile";

import {
  Container,
  HomeContainer,
} from '../Navbar/styles'

export function Home({ secHomeRef, secAboutRef, secWorkRef, secBlogRef, secLetsTalkRef }) {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <Container>
      <NavbarMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <HomeContainer>
        <Header 
          setMenuIsVisible={setMenuIsVisible} 
          secHomeRef={secHomeRef}
          secAboutRef={secAboutRef}
          secWorkRef={secWorkRef}
          secBlogRef={secBlogRef}
          secLetsTalkRef={secLetsTalkRef}
        />
      </HomeContainer>
    </Container>
  )
}

export default Home;