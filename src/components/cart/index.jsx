import * as S from "./styles";
// import { FiX } from "react-icons/fi";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  return (
    <S.CartContainer isVisible={isVisible}>
      <S.CartEscapeArea onClick={handleEscapeAreaClick} />
      <S.CartContent>
        <S.CartTitle>Seu Carrinho</S.CartTitle>
        {/* <S.ModalClose>
          <FiX color="black" size={20} />
        </S.ModalClose> */}
      </S.CartContent>
    </S.CartContainer>
  );
};

export default Cart;
