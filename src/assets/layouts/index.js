import styled from "@emotion/styled";
import { Colors } from "../variables/variables";

export const Flex = styled.div`
  display: flex;
`;

export const Block = styled.div`
  display: inline-block;
  position: relative;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 120px;
  height: 120px;
  margin-right: 20px;
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0 30px 0px;
  height: 140px;
`;

export const FooterContainer = styled.div`
  padding: 30px 0;
  background-color: ${Colors.$tagColor};

  p {
    text-align: center;
    width: 100%;
  }
`;

export const SingleProjectContainer = styled.div`
  height: calc(100% - 140px);
`;

export const DivHalf = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;
`;

export const Row = styled.div`
  display: flex;
  display: -ms-flexbox;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const CloseBtn = styled.div`
  width: 15px;
  height: 15px;
  cursor: pointer;
  right: 15px;
  top: 15px;
  left: initial;

  &:before,
  &:after {
    position: absolute;
    content: "";
    width: 20px;
    height: 2px;
    top: 6px;
    left: -3px;
    background-color: #000;
  }

  &:before {
    transform: rotate(-45deg);
  }

  &:after {
    transform: rotate(45deg);
  }
`;

export const BigTag = styled.span`
  position: relative;
  font-size: 20px;
  line-height: 1.1;
  color: ${Colors.$tagColor};
`;

export const Tag = styled.span`
  position: relative;
  font-size: 16px;
  line-height: 1.1;
  color: ${(props) => (props.color ? props.color : Colors.$tagColor)};
`;

export const BigTitle = styled.h1`
  font-size: 54px;
  line-height: 1.3;
`;

export const Title = styled.h2`
  font-size: 32px;
`;

export const SubTitle = styled.h2`
  font-size: 25px;
  ${(props) => (props.color ? `color: ${props.color}` : "")}
`;

export const Paragraph = styled.p`
  font-size: 18px;
`;

export const SmallParagraph = styled.p`
  font-size: 14px;
  font-weight: 100;
`;

export const Quote = styled.span`
  position: relative;
  font-size: 16px;
  font-weight: 500;
  padding-left: 10px;
  font-style: italic;
  line-height: 1;

  &:before {
    position: absolute;
    content: "";
    width: 2px;
    height: 100%;
    left: 0;
    top: 0;
    background: ${Colors.$primaryColor};
  }
`;

export const Seperator = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  border-radius: 1px;
  background-color: #000;
  opacity: 0.4;
`;

export const HomepageContainer = styled.div`
  ${(props) =>
    props.theme === "dark" &&
    "background-color:" + Colors.$darkThemeBackground};
`;
