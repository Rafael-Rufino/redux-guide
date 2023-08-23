import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "../cart/index";

import * as S from "./styles";
import { BsCartPlusFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { loginUser, logoutUser } from "../../redux/user/actions";

function Header() {
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const dispatch = useDispatch();

  const handleCartClick = () => {
    setCartIsVisible(!cartIsVisible);
  };

  const handleLoginClick = () => {
    dispatch(
      loginUser({
        name: "Rafael",
        email: "rafael@gmail.com",
      })
    );
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

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
