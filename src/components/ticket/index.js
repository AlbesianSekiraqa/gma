import { ReporterContent, TagLayout } from "../single-project/layouts";
import { TicketLayout, Title, Type } from "./layouts";

const Ticket = ({ data, toggleModal }) => {
  const { title = null, type = null, assignee = null, reporter = null } = data;

  return (
    <TicketLayout onClick={() => toggleModal(data)}>
      {type && (
        <Type type={type}>
          <span>{type}</span>
        </Type>
      )}
      {title && <Title>{title}</Title>}
      <ReporterContent>
        {reporter && (
          <TagLayout>
            <span>Reporter:</span>
            <p>{reporter}</p>
          </TagLayout>
        )}
        {assignee && (
          <TagLayout>
            <span>Assignee:</span>
            <p>{assignee}</p>
          </TagLayout>
        )}
      </ReporterContent>
    </TicketLayout>
  );
};

export default Ticket;
