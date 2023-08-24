import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "outlined" | "danger";
}

export const StyledButton = styled.button<ButtonProps>`
  appearance: none;
  border: none;
  border-radius: 5px;
  height: 40px;
  padding: 8px;
  font-size: "1rem";
  font-weight: 500;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  ${(props) => {
    const { variant } = props;
    switch (variant) {
      case "primary":
        return `
          background-color: blue;
          color: white;
          &:hover {
            background-color: darkblue;
          }
        `;
      case "outlined":
        return `
          background-color: transparent;
          color: blue;
          border: 1px solid blue;
   
          &:hover {
            background-color: blue;
            color: white;
          }
        `;
      case "danger":
        return `
          background-color: transparent;
          color: red;
          border: 1px solid red;
          &:hover {
            background-color: red;
            color: white;
          }
        `;
      default:
        return "";
    }
  }};
`;
