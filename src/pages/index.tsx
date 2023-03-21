import * as style from "../styles/index";
import { Logo } from "../components/logo/logo";
import { Card } from "../components/card/card";
import { Header } from "../components/header/header";

export const Index = () => {
  return (
    <>
      <Header />

      <style.Main>
        <Logo />
        <Card/>
      </style.Main>
    </>
  )
}