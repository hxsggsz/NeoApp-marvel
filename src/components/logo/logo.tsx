import { Link } from "react-router-dom";
import { StyledLogo } from ".";
import logo from "/logo.png";

export const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">
        <img width={159} height={60} src={logo} alt="logo da marvel escrito marvel" />
      </Link>
    </StyledLogo>
  )
}