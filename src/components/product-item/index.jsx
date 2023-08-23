import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";

import CustomButton from "../custom-button/index";

import * as S from "./styles";
import { addProductToCart } from "../../redux/cart/actions";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleProductToCartClick = () => {
    dispatch(addProductToCart(product));
  };
  return (
    <S.ProductContainer>
      <S.ProductImage imageUrl={product.imageUrl}>
        <CustomButton
          startIcon={<BsCartPlus />}
          onClick={handleProductToCartClick}
        >
          Adicionar ao carrinho
        </CustomButton>
      </S.ProductImage>

      <S.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </S.ProductInfo>
    </S.ProductContainer>
  );
};

export default ProductItem;
