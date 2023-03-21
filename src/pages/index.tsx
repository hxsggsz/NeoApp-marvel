import * as style from "../styles/index"
import logo from "/logo.png";
import { Logo } from "../components/logo/logo"
import { Header } from "../components/header/header"

export const Index = () => {
  return (
    <>
      <Header />

      <style.Main>
        <Logo />
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magni quo quos nam recusandae numquam similique, nisi eveniet sapiente doloremque nesciunt quam, voluptates sunt neque? Pariatur natus quas deserunt temporibus.
        </h1>
      </style.Main>
    </>
  )
}