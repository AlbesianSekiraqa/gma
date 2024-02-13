import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { Transitions } from "../../assets/variables/variables";

export const ProjectLayout = styled(Link)`
  width: ${(props) => 100 - props.depth * 5}%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 12px;
  box-shadow: 1px 1px 11px 0px rgb(0 0 0 / 26%);
  margin-bottom: 30px;
  padding: 20px 35px;
  min-height: 200px;
  position: relative;
  z-index: 2;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    z-index: -1;
    opacity: 0.5;
    transition: 0.4s ${Transitions.$superSmooth};
  }

  &:hover {
    img {
      opacity: 0.7;
    }
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: ${(props) => (props.theme === "dark" ? "#fff" : " #000")};
  }

  & + div:first-of-type a:first-of-type {
    &:before {
      top: -10px;
      left: -2.5%;
      height: calc(50% + 10px);
      width: 2px;
    }

    &:after {
      width: calc(2.5% - 5px);
      height: 2px;
      left: -2.5%;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  ${(props) =>
    props.child === "true" &&
    css`
      padding: 15px 30px;
      margin-left: auto;
      margin-bottom: 30px;
      min-height: 150px;
    `}

  ${(props) =>
    props.theme === "dark" &&
    css`
      h2,
      span,
      p {
        color: #fff;
      }
    `}
`;

export const ProjectTitle = styled.h2`
  font-size: 32px;
  font-weight: 400;
  padding: 10px 0;
  line-height: 1;
`;

export const ProjectDate = styled.span`
  position: absolute;
  bottom: 0;
  right: 30px;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 20px;
`;

export const ProjectDescription = styled.p`
  max-width: 70%;
  font-size: 18px;
  font-weight: 400;
  padding-bottom: 30px;
`;

export const SubProjectTitle = styled.h3`
  font-size: 25px;
  font-weight: 300;
`;

export const SubProjectDescription = styled.p`
  max-width: 70%;
  font-size: 16px;
  font-weight: 100;
  padding-bottom: 20px;
`;
