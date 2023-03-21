import { StyledLogo } from ".";
import logo from "/logo.png";

export const Logo = () => {
  return (
    <StyledLogo>
      <img width={159} height={60} src={logo} alt="logo da marvel escrito marvel" />
    </StyledLogo>
  )
}