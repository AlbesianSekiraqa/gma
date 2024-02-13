import { Flex } from "../../assets/layouts";
import { useTheme } from "../../contexts/ThemeContext";
import Image from "../image";
import {
  ProjectDate,
  ProjectTitle,
  ProjectLayout,
  ProjectDescription,
} from "./layouts";

const renderProjects = (projects, isChild = false, depth = 0, theme) => {
  return (
    <>
      {projects.map((project) => {
        const {
          id,
          slug,
          image = null,
          children = null,
          createdAt = null,
          description = null,
          title = "Project Title",
        } = project;

        return (
          <Flex className="flex-column" key={id}>
            <ProjectLayout
              to={`projects/${slug}`}
              theme={theme}
              depth={depth}
              child={`${isChild}`}
              className={isChild ? "child" : ""}
            >
              {image && <Image source={image} />}
              {title && <ProjectTitle>{title}</ProjectTitle>}
              {createdAt && <ProjectDate>Date: {createdAt}</ProjectDate>}
              {description && (
                <ProjectDescription>{description}</ProjectDescription>
              )}
            </ProjectLayout>
            {children && renderProjects(children, true, depth + 1, theme)}
          </Flex>
        );
      })}
    </>
  );
};

const ProjectsList = ({ data }) => {
  const { theme } = useTheme();

  if (!data) return null;
  return <>{renderProjects(data, false, 0, theme)}</>;
};

export default ProjectsList;
