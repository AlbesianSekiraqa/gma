import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  Colors,
  ModalColors,
  Transitions,
} from "../../assets/variables/variables";

export const ModalContainer = styled.div`
  display: flex;
  padding: 30px;
  width: 60%;
  position: fixed;
  top: 40%;
  left: 50%;
  z-index: 99;
  border-radius: 6px;
  background-color: #fff;
  transform: translate(-50%, -50%);
`;

export const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 98;
  background-color: ${ModalColors.BackgroundShade};
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 0 65%;
  padding-right: 30px;

  a {
    font-weight: 100;
    color: ${Colors.$colorBlue};
  }

  ul {
    margin: 20px 0;
    padding-left: 20px;
    p {
      padding-bottom: 10px;
    }
  }
`;

export const ModalDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 0 35%;
  padding-top: 70px;
`;

export const Title = styled.h5`
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 30px;
  color: ${ModalColors.Text};
`;

export const Tag = styled.span`
  position: relative;
  display: inline-bolock;
  padding-bottom: 20px;
  font-size: 15px;
  font-style: italic;
  color: ${Colors.$tagColor};
`;

export const SmallTag = styled.p`
  position: relative;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: ${ModalColors.Tag};
`;

export const ParagraphTag = styled.span`
  font-size: 15px;
  font-weight: bold;
  line-height: 1;
  padding-bottom: 10px;
  color: ${ModalColors.Text};
`;

export const Paragraph = styled.p`
  font-size: 15px;
  font-weight: 100;
  line-height: 1;
  margin-left: -5px;
  padding: 7px;
  border-radius: 1px;
  transition: 0.4s ${Transitions.$linearSmooth};
  cursor: text;

  ${(props) =>
    props.status === "TO_DO"
      ? css`
          background-color: ${ModalColors.ToDoStatus};
          color: #fff;
        `
      : props.status === "IN_PROGRESS"
      ? css`
          background-color: ${ModalColors.InProgressStatus};
          color: #fff;
        `
      : props.status === "DONE"
      ? css`
          background-color: ${ModalColors.DoneStatus};
          color: #fff;
        `
      : css`
          &:hover {
            background-color: ${Colors.$colorGreyLight};
          }
        `};
`;

export const DropdownLayout = styled.div`
  border: 1px solid ${ModalColors.Border};
  border-radius: 2px;

  > div {
    padding: 15px 20px;
    align-items: center;
  }

  p {
    width: 50%;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid ${ModalColors.Border};

  h6 {
    font-size: 15px;
    margin: 0;
    flex: 0 calc(50% - 10px);
  }

  p {
    width: fit-content;
    padding: 2px 7px;
    border-radius: 4px;
    color: #fff;
    font-weight: 100;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
    background-color: ${(props) =>
      props.type === "task"
        ? Colors.$colorBlue
        : props.type === "attachment"
        ? Colors.$colorRed
        : props.type === "note"
        ? Colors.$colorOrange
        : ""};
  }
`;
