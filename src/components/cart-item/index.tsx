import { useState } from "react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";

import * as S from "./styles";

import { useDispatch } from "react-redux";

import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProduct,
} from "../../redux/cart/slice";

import ConfirmationModal from "../modal";
import { ProductTypes } from "../../data/products";

interface CartItemProps {
  product: ProductTypes;
}

const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveClick = () => {
    dispatch(removeProduct(product.id));
  };

  const handleIncreaseClick = () => {
    dispatch(increaseProductQuantity(product.id));
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseProductQuantity(product.id));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <S.CartItemContainer>
      <S.CartItemImage imageUrl={product.imageUrl} />

      <S.CartItemInfo>
        <S.CardProfuctInfo>
          <p>{product.name}</p>
          <p>R${product.price}</p>
        </S.CardProfuctInfo>

        <ConfirmationModal
          titleModal="Deseja realmente excluir esse produto?"
          handleDelete={handleRemoveClick}
          open={isModalOpen}
          setOpen={setIsModalOpen}
          confirmText="Confirmar"
          cancelText="Cancelar"
          confirmationLoading
        />

        <FiTrash
          size={22}
          aria-label={`Remove ${product.name}`}
          color="red"
          onClick={handleOpenModal}
          title="Remover produto"
        />
      </S.CartItemInfo>
      <S.Wrapper>
        <S.CartItemQuantity>
          <AiOutlineMinus
            color="black"
            size={20}
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p>{product.quantity || 0}</p>
          <AiOutlinePlus
            color="black"
            size={20}
            onClick={handleIncreaseClick}
            aria-label={`Increase quantity of ${product.name}`}
          />
        </S.CartItemQuantity>

        <div />
      </S.Wrapper>
    </S.CartItemContainer>
  );
};

export default CartItem;
