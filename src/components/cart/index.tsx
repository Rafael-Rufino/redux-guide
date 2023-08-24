import { useSelector } from "react-redux";

import * as S from "./styles";

import { AiOutlineClose } from "react-icons/ai";

import CartItem from "../cart-item";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";
import { ProductTypes } from "../../data/products";

interface CartProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const Cart = ({ isVisible, setIsVisible }: CartProps) => {
  const { products } = useSelector(
    (rootReducer: any) => rootReducer.cartReducer
  ) as any;

  const handleModalClose = () => setIsVisible(false);

  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  const hasProduct = products.length > 0;

  return (
    <S.CartContainer isVisible={isVisible}>
      <S.CartEscapeArea onClick={handleModalClose} />
      <S.CartContent>
        <S.ModalClose>
          <S.CartTitle>Seu Carrinho</S.CartTitle>
          <AiOutlineClose title="fechar" size={20} onClick={handleModalClose} />
        </S.ModalClose>

        {products.map((product: ProductTypes) => (
          <CartItem product={product} />
        ))}

        {hasProduct && (
          <S.CardProductTotalPrice>
            <S.TotalValue>
              Total: R${" "}
              {productsTotalPrice.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </S.TotalValue>
          </S.CardProductTotalPrice>
        )}
      </S.CartContent>
    </S.CartContainer>
  );
};

export default Cart;
