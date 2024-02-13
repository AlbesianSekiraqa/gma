import { Container, FooterContainer } from "../../assets/layouts";
import Logo from "../../components/logo";

const Footer = () => {
  return (
    <FooterContainer>
      <Container className="p-relative">
        <Logo />
        <p>Copyright: 2003-2024</p>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
