import {
  BigTitle,
  Container,
  HomepageContainer,
} from "../assets/layouts/index";
import ProjectsList from "../components/projects-list";
import { useTheme } from "../contexts/ThemeContext";

const Home = ({ data }) => {
  const { theme } = useTheme();

  return (
    <HomepageContainer theme={theme}>
      <Container>
        <BigTitle className={`mb-50 ${theme === "dark" ? "color-white" : ""}`}>
          Check our amazing projects!
        </BigTitle>
        {data && <ProjectsList data={data} />}
      </Container>
    </HomepageContainer>
  );
};

export default Home;
