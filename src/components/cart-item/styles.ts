import styled from "styled-components";

interface CartItemProps {
  imageUrl: string;
}

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  flex-direction: column;
  flex-wrap: wrap;

  p {
    color: #222222;
  }
`;

export const CartItemImage = styled.div<CartItemProps>`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 250px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const CartItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
  flex: 1;

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }

  p:nth-child(2) {
    font-weight: 500;
  }

  > svg {
    transition: all 0.2s ease-in-out;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;

export const CardProfuctInfo = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;
export const CartItemQuantity = styled.div`
  padding: 4px 10px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 4px;

  p {
    margin-left: 10px;
    margin-right: 10px;
  }

  svg:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const RemoveButton = styled.div`
  display: flex;
  color: blue;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
