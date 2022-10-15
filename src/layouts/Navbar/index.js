import { useState } from "react";
import { Header } from "../../components/sections/Header/Header";
import { NavbarMobile } from "../../components/sections/HeaderMobile";

import {
  Container,
  HomeContainer,
} from '../Navbar/styles'

export function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <Container>
      <NavbarMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <HomeContainer>
        <Header setMenuIsVisible={setMenuIsVisible}/>
      </HomeContainer>
    </Container>
  )
}

export default Home;