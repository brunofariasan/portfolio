import { useState } from "react";
import { Header } from "../../components/sections/Header/Header";
import { NavbarMobile } from "../../components/sections/HeaderMobile";
import { HomeContainer } from "../../styles/HomeStyles";

export function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <NavbarMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <HomeContainer>
        <Header setMenuIsVisible={setMenuIsVisible}/>
      </HomeContainer>
    </>
  )
}
export default Home;