import { StyledLogo } from ".";
import logo from "/logo.png";

export const Logo = () => {
  return (
    <StyledLogo>
      <img width={180} height={80} src={logo} alt="logo da marvel escrito marvel" />
    </StyledLogo>
  )
}