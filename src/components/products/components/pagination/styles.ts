import styled from "styled-components";

interface PageButtonType {
  active: boolean;
}
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

export const PageButton = styled.button<PageButtonType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 32px;
  font-size: 1rem;
  border-radius: 0.3125rem;
  background-color: ${(props) => (props.active ? "#fff" : "#fff")};
  color: ${(props) => (props.active ? "green" : "#aaa")};
  border: 2px solid ${(props) => (props.active ? "#000" : "#aaa")};
`;
