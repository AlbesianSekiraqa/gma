import styled from "@emotion/styled";
import { Colors } from "../../assets/variables/variables";

export const HeaderLayout = styled.div`
  width: 100%;
  position: relative;

  ${(props) =>
    props.theme === "dark" &&
    "background-color:" + Colors.$darkThemeBackground};
`;
