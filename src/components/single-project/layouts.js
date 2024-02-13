import styled from "@emotion/styled";
import { Colors, Transitions } from "../../assets/variables/variables";

export const ProjectLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 15px;

  ${(props) =>
    props.theme === "dark" &&
    "background-color:" + Colors.$darkThemeBackground};
`;

export const ProjectFilters = styled.div`
  width: 350px;
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 6px;
  background-color: ${Colors.$colorGreyLight};

  ${(props) =>
    props.theme === "dark" && "background-color:" + Colors.$darkThemeColumns};
`;

export const ToggleLayout = styled.div`
  position: relative;
  margin: 15px 0;

  p {
    font-size: 16px;
  }

  h6 {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    margin-bottom: 5px;
  }
`;

export const ToggleButton = styled.div`
  width: 46px;
  height: 26px;
  padding: 3px;
  border-radius: 20px 20px;
  background-color: #cbd2e9;
  margin: 0 15px;
  cursor: pointer;
  position: relative;
  transition: 0.4s ${Transitions.$superSmooth};

  span {
    display: inline-block;
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #fbfbfb;
    transition: 0.4s ${Transitions.$superSmooth};
  }

  &.dark {
    background-color: ${Colors.$colorBlue};

    span {
      left: calc(100% - 23px);
    }
  }
`;

export const ProjectContent = styled.div`
  width: calc(100% - 350px);
  padding: 0 30px 30px 30px;
`;

export const ProjectStatus = styled.div`
  width: 300px;
  height: 100%;
  border-radius: 6px;
  margin-right: 15px;
  background-color: ${(props) =>
    props.theme === "dark" ? Colors.$darkThemeColumns : Colors.$colorGreyLight};

  &:last-of-type {
    margin: 0;
  }
`;

export const ProjectBody = styled.div`
  height: calc(100% - 60px);
  position: relative;
  display: flex;
`;

export const ProjectHeader = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 6px;
  background-color: ${(props) =>
    props.theme === "dark" ? Colors.$darkThemeColumns : Colors.$colorGreyLight};

  p {
    font-size: 18px;
    font-weight: 100;
  }

  > div {
    align-items: center;
  }
`;

export const StatusTitle = styled.h3`
  font-size: 23px;
  font-weight: 500;
  padding: 5px 10px;
`;

export const StatusContent = styled.div`
  border-radius: 6px;
  padding: 10px;
  position: relative;
`;

export const ReporterContent = styled.div`
  width: 100%;
  display: flex;
  padding-top: 30px;
  justify-content: space-between;
`;

export const TagLayout = styled.div`
  width: 50%;
  padding-right: 5px;
  display: flex;
  flex-direction: column;

  &:last-of-type {
    padding-right: 0;
    padding-left: 5px;
  }

  p,
  span {
    line-height: 1;
    font-size: 14px;
  }

  span {
    display: inline-block;
    position: relative;
    font-weight: 100;
  }

  p {
    font-weight: 600;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;

  .dropdown {
    min-width: 140px;
    position: relative;
    color: #fff;
    padding: 7px 40px 7px 15px;
    background-color: ${Colors.$colorBlue};
    line-height: 1;
    cursor: pointer;
    border-radius: 2px;

    .Dropdown-menu {
      width: 100%;
      position: absolute;
      left: 0;
      top: 30px;
      background-color: #fff;
      color: #000;
      z-index: 97;
      box-shadow: 5px 5px 9px 1px rgb(0 0 0 / 10%);

      .Dropdown-option {
        padding: 10px;
        cursor: pointer;

        &:hover {
          background-color: ${Colors.$colorGreyLight};
        }
      }
    }

    &.is-open + svg {
      transform: translateY(-50%) rotateX(180deg);
    }
  }

  svg {
    position: absolute;
    right: 5px;
    top: 50%;
    width: 25px;
    height: 25px;
    transition: 0.3s ${Transitions.$linearSmooth};
    transform: translateY(-50%) rotateX(0);

    path {
      stroke: #fff;
    }
  }
`;
