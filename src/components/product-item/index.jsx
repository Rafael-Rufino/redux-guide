import { BsCartPlus } from "react-icons/bs";

import CustomButton from "../custom-button/index";

import * as S from "./styles";

const ProductItem = ({ product }) => {
  return (
    <S.ProductContainer>
      <S.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />}>
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
