import "./style.scss";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchBox, SearchContainer, SearchInput } from "./layouts";
import { useTheme } from "../../contexts/ThemeContext";
import Icon from "../../assets/icons/icon";

const Navigation = ({ data }) => {
  const { theme } = useTheme();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();

    if (inputValue) {
      navigate(`/projects/${inputValue.toLowerCase()}`);
    }
  }

  return (
    <div
      className={`d-flex align-center w-full ${
        theme === "dark" ? "dark" : "light"
      }`}
    >
      <SearchContainer onSubmit={handleSearch}>
        <SearchInput
          type="search"
          value={inputValue}
          placeholder="Search a project..."
          onChange={handleInputChange}
        />
        <SearchBox type="submit">
          <Icon icon="search" />
        </SearchBox>
      </SearchContainer>
      <NavLink
        to="/"
        className={"navlink text-decoration-none color-black py-5 px-10"}
      >
        Home
      </NavLink>
      {/* I want to prevent a frontend bug if there are 100 root projects. So we use slice */}
      {data &&
        data.slice(0, 5).map((project, index) => {
          const { title = "", slug } = project;
          return (
            <NavLink
              key={index}
              to={`/projects/${slug}`}
              className={"navlink text-decoration-none color-black py-5 px-10"}
            >
              {title}
            </NavLink>
          );
        })}
    </div>
  );
};

export default Navigation;
