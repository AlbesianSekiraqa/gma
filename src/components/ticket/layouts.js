import styled from "@emotion/styled";
import { Colors, Transitions } from "../../assets/variables/variables";

export const TicketLayout = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  border-radius: 6px;
  margin-bottom: 10px;
  background-color: #fff;
  display: inline-block;
  padding: 35px 15px 10px 15px;
  transition: 0.4s ${Transitions.$superSmooth};

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${Colors.$primarySuperExtraLightColor};

    & > p {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.p`
  font-weight: 100;
  font-size: 18px;
  line-height: 1.1;
`;

export const Type = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 3px 15px;
  border-radius: 6px 6px 0 0;
  color: #fff;
  line-height: 1;
  font-size: 14px;
  background-color: ${(props) =>
    props.type === "task"
      ? Colors.$colorBlue
      : props.type === "attachment"
      ? Colors.$colorRed
      : props.type === "note"
      ? Colors.$colorOrange
      : ""};
`;
