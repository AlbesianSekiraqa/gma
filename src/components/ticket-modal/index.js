import { CloseBtn, Flex } from "../../assets/layouts";
import {
  Tag,
  Title,
  SmallTag,
  Paragraph,
  HeaderTitle,
  ModalContent,
  ModalDetails,
  ParagraphTag,
  DropdownLayout,
  ModalContainer,
  ModalBackground,
} from "./layouts";

const Modal = ({ data, closeModalTicket }) => {
  const {
    type = null,
    status = null,
    assignee = null,
    priority = null,
    reporter = null,
    content = null,
    createdAt = null,
    lastUpdateAt = null,
    title = "Ticket Title",
  } = data;

  return (
    <>
      <ModalContainer>
        <ModalContent>
          <Tag>
            {title}/{assignee}
          </Tag>
          {title && <Title>{title}</Title>}
          {content.description && (
            <>
              <ParagraphTag>Description</ParagraphTag>
              <Paragraph>{content.description}</Paragraph>
            </>
          )}
          {content.url && (
            <a target="_blank" rel="noreferrer" href={content.url}>
              {content.url}
            </a>
          )}
          {content.todo && (
            <ul>
              {content.todo.map((task, index) => {
                return (
                  <li key={index}>
                    <Paragraph>{task}</Paragraph>
                  </li>
                );
              })}
            </ul>
          )}
        </ModalContent>
        <ModalDetails>
          <DropdownLayout>
            <HeaderTitle type={type}>
              <h6>Details</h6>
              <p>{type}</p>
            </HeaderTitle>
            {assignee && (
              <Flex>
                <SmallTag>Assignee:</SmallTag>
                <Paragraph>{assignee}</Paragraph>
              </Flex>
            )}
            <Flex>
              <SmallTag>Status:</SmallTag>
              <Paragraph status={status}>{status}</Paragraph>
            </Flex>
            {priority && (
              <Flex>
                <SmallTag>Priority:</SmallTag>
                <Paragraph>{priority}</Paragraph>
              </Flex>
            )}
            {reporter && (
              <Flex>
                <SmallTag>Reporter:</SmallTag>
                <Paragraph>{reporter}</Paragraph>
              </Flex>
            )}
            {createdAt && (
              <Flex>
                <SmallTag>Create Date:</SmallTag>
                <Paragraph>{createdAt}</Paragraph>
              </Flex>
            )}
            {lastUpdateAt && (
              <Flex>
                <SmallTag>Last Updated:</SmallTag>
                <Paragraph>{lastUpdateAt}</Paragraph>
              </Flex>
            )}
          </DropdownLayout>
        </ModalDetails>
        <CloseBtn className="p-absolute-fixed" onClick={closeModalTicket} />
      </ModalContainer>
      <ModalBackground onClick={closeModalTicket} />
    </>
  );
};

export default Modal;
