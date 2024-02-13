import { NavLink } from "react-router-dom";
import { LogoContainer } from "../../assets/layouts";
import GmaLogo from "../../assets/images/gmaLogo.png";
import Image from "../image";

const Logo = ({ className, invert }) => {
  return (
    <LogoContainer className={className}>
      <NavLink to="/" className={"d-flex p-relative"}>
        <Image
          source={!invert ? GmaLogo : "GmaLogo"}
          classList={"w-full h-full object-contain"}
          alt="logo"
        />
      </NavLink>
    </LogoContainer>
  );
};

export default Logo;
