import styled from "styled-components";

interface CartContainerProps {
  isVisible: boolean;
}

export const CartContainer = styled.div<CartContainerProps>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.3s ease;

  p {
    color: #222222;
  }
`;

export const CartEscapeArea = styled.div`
  width: 100%;
`;

export const CartContent = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  min-width: 500px;
  z-index: 200;
  background-color: white;
  padding: 20px;
  overflow-y: scroll;
  flex-direction: column;

  @media (max-width: 768px) {
    min-width: 85%;
  }
`;
export const CartTitle = styled.p`
  font-size: 1.325rem;
  font-weight: 600;
`;
export const CartTotal = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 15px;
`;
export const ModalClose = styled.div`
  display: flex;
  justify-content: space-between;
  justify-self: center;
  align-items: center;
  margin-bottom: 1.5rem;

  > svg {
    cursor: pointer;
    color: #222222;
    transition: all 0.3s ease;

    &:hover {
      color: red;
    }
  }
`;
export const CardProductTotalPrice = styled.div``;

export const TotalValue = styled.p`
  font-weight: 600;
  font: 1.125rem;
  color: #222222;
`;
