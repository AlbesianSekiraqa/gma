import styled from "@emotion/styled";

export const SearchContainer = styled.form`
  display: flex;
  margin-right: 30px;
  width: 100%;
  border: 1px solid #dddfe4;
  border-radius: 6px;
  padding: 2px;
`;

export const SearchBox = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  width: 30px;
  height: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;

  svg {
    width: 17px;
    height: 16px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 3px 0px 3px 10px;
  outline: none;
  border: none;
  background-color: #fff;
  color: #000;
  font-weight: 100;
  font-size: 12px;
`;

export const SearchTitle = styled.div`
  display: flex;
  padding: 50px 0;
  align-items: baseline;

  h3 {
    font-weight: 500;
  }

  p {
    padding-left: 5px;
    font-size: 32px;
    font-weight: 900;
  }
`;
