import bg from "/bg.jfif"
import { StyledHeader } from "."

export const Header = () => {
  return (
    <>
    {/* colocando a imagem direto no html inves do <img/> não deixa a imagem esticada no mobile */}
      <StyledHeader style={{
            background: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            width: "100vw",
            height: "100vh",
         }} />
    </>
  )
}