import { useState } from "react";

import Cart from "../cart/index";

import * as S from "./styles";
import { BsCartPlusFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleCartClick = () => {
    setCartIsVisible(!cartIsVisible);
  };

  const handleLoginClick = () => {};

  const handleLogoutClick = () => {};
  const currentUser = false;
  return (
    <S.Container>
      <S.Logo>Lojinha</S.Logo>
      <S.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>
            {" "}
            <FiLogOut /> Sair
          </div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        <div onClick={handleCartClick}>
          {" "}
          <BsCartPlusFill /> Carrinho [{1}]
        </div>
      </S.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </S.Container>
  );
}

export default Header;
