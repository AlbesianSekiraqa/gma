import { useParams } from "react-router-dom";
import { data } from "../data/data.js";
import { findDataBySlug } from "../helpers/functions.js";
import { Container, SingleProjectContainer } from "../assets/layouts/index.js";
import SingleProject from "../components/single-project/index.js";

const Project = () => {
  const { slug } = useParams();
  const projectData = findDataBySlug(data, "slug", slug);

  if (!projectData) return;
  return (
    <SingleProjectContainer>
      {projectData ? (
        <SingleProject data={projectData} />
      ) : (
        <Container>
          <h2>Project Not Found</h2>
        </Container>
      )}
    </SingleProjectContainer>
  );
};

export default Project;
