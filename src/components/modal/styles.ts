import styled from "styled-components";

interface ModalTitleProps {
  fontSize?: "small" | "medium" | "large";
}

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 5px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.75rem;
  color: #333;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ModalContentInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  .button-container {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const ModalTitle = styled.h1<ModalTitleProps>`
  font-weight: 500;
  color: #333;
  margin-bottom: 1rem;
  font-size: ${({ fontSize }) => {
    switch (fontSize) {
      case "small":
        return "1rem";
      case "medium":
        return "1.125rem";
      case "large":
        return "1.375rem";
      default:
        return "1.375rem";
    }
  }};
`;
