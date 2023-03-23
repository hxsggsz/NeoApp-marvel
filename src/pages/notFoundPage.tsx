import { Link } from "react-router-dom"
import { Text } from "../components/text/text"
import { StyledNotFound } from "../styles/notFoundPage"
import avangers from "/side-avengers.png"
import { Button } from "../components/buttons/button/button"
import { Logo } from "../components/logo/logo"
import spider from "/spider-man.png"

export const NotFoundPage = () => {
  return (
    <StyledNotFound>
      <Logo/>
      <div className="content">
        <Text size="lg">404 PAGE NOT FOUND</Text>
        <Text>The Avengers not found this page</Text>
        <img src={spider} width={270} height={200} />
        <Button><Link to="/">Come back home</Link></Button>
      </div>


      <div className="image-container">
        <img src={avangers} width={100} height={100} />
      </div>
    </StyledNotFound>
  )
}