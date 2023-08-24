import { useState } from "react";

import * as S from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../../redux/user/actions";
import { selectCartProducts } from "../../redux/cart/cart.selectors";

import { BsCartPlusFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

import Cart from "../cart/index";

import useWindowDimensions from "../../hooks";

function Header() {
  const { isMobile } = useWindowDimensions();
  const { currentUser } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  ) as any;
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const dispatch = useDispatch();

  const handleCartClick = () => {
    setCartIsVisible(!cartIsVisible);
  };

  const productCount = useSelector(selectCartProducts);

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
      <S.Logo>
        <a href="/">Lojinha </a>
      </S.Logo>

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
          <BsCartPlusFill /> {!isMobile && " Carrinho "} [{productCount}]
        </div>
      </S.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </S.Container>
  );
}

export default Header;
