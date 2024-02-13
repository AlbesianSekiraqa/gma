import Logo from "../../components/logo";
import Navigation from "../navigation";
import { Container, HeaderContainer } from "../../assets/layouts";
import { useTheme } from "../../contexts/ThemeContext";
import { HeaderLayout } from "./layouts";

const Header = ({ data }) => {
  const { theme } = useTheme();

  return (
    <HeaderLayout theme={theme}>
      <Container className="p-relative">
        <title>GMA</title>
        <HeaderContainer className="header">
          <Logo />
          <Navigation data={data} />
        </HeaderContainer>
      </Container>
    </HeaderLayout>
  );
};

export default Header;
