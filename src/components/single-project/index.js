import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-dropdown";
import { useTheme } from "../../contexts/ThemeContext";
import { Flex, Paragraph, Seperator } from "../../assets/layouts";
import Ticket from "../ticket";
import TicketModal from "../ticket-modal";
import Icon from "../../assets/icons/icon";
import { createSlug, filterTicketsFromProject } from "../../helpers/functions";
import {
  StatusTitle,
  ToggleLayout,
  StatusContent,
  ProjectLayout,
  ProjectStatus,
  ProjectFilters,
  ProjectContent,
  ProjectHeader,
  ToggleButton,
  ProjectBody,
  DropdownContainer,
} from "./layouts";

const SingleProject = ({ data }) => {
  const navigate = useNavigate();
  const [activeTicket, setActiveTicket] = useState(null);
  const { title = null, children = null } = data;
  const { theme, toggleTheme } = useTheme();
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    setAllData([
      {
        title: "To Do",
        content: filterTicketsFromProject(data, "TO_DO"),
      },
      {
        title: "In Progress",
        content: filterTicketsFromProject(data, "IN_PROGRESS"),
      },
      {
        title: "Done",
        content: filterTicketsFromProject(data, "DONE"),
      },
    ]);
  }, [allData]);

  function openModalTicket(ticketData) {
    setActiveTicket(ticketData);
  }

  function closeModalTicket() {
    setActiveTicket(null);
  }

  function handleDropdownChange(input) {
    if (input.value) {
      navigate(`/projects/${createSlug(input.value)}`);
    }
  }

  return (
    <ProjectLayout theme={theme}>
      <ProjectFilters theme={theme}>
        <h5 className="mb-20">Options</h5>
        <ToggleLayout>
          <h6 className="mb-10 font-w-100">Select your theme</h6>
          <Flex>
            <Paragraph>Light</Paragraph>
            <ToggleButton
              onClick={toggleTheme}
              className={theme === "dark" ? "dark" : "light"}
            >
              <span />
            </ToggleButton>
            <Paragraph>Dark</Paragraph>
          </Flex>
        </ToggleLayout>
        <Seperator />
        <ToggleLayout>
          <h6 className="mb-10 font-w-100">Select your language</h6>
          <Flex>
            <Paragraph>Shqip</Paragraph>
            <ToggleButton>
              <span />
            </ToggleButton>
            <Paragraph>English</Paragraph>
          </Flex>
        </ToggleLayout>
      </ProjectFilters>
      <ProjectContent>
        <ProjectHeader theme={theme}>
          <Flex className="pr-30">
            <Paragraph className="pr-5">Project title:</Paragraph>
            <Paragraph>{title}</Paragraph>
          </Flex>
          {children && (
            <Flex>
              <Paragraph className="pr-10">More from {title}</Paragraph>
              <DropdownContainer>
                <Dropdown
                  options={children}
                  onChange={(e) => handleDropdownChange(e)}
                  placeholder="Select an option"
                  className="dropdown"
                />
                <Icon icon="arrowTop" />
              </DropdownContainer>
            </Flex>
          )}
        </ProjectHeader>
        <ProjectBody>
          {allData &&
            allData.map((item, index) => {
              const { title = "Status", content = null } = item;
              return (
                <ProjectStatus theme={theme} key={index}>
                  <StatusTitle>{title}</StatusTitle>
                  <StatusContent>
                    {content &&
                      content.map((ticket, index) => {
                        return (
                          <Ticket
                            key={index}
                            data={ticket}
                            toggleModal={() => openModalTicket(ticket)}
                          />
                        );
                      })}
                  </StatusContent>
                </ProjectStatus>
              );
            })}
        </ProjectBody>
      </ProjectContent>
      {activeTicket && (
        <TicketModal data={activeTicket} closeModalTicket={closeModalTicket} />
      )}
    </ProjectLayout>
  );
};

export default SingleProject;
