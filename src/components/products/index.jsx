import products from "../../data/products";

import ProductItem from "../product-item/index";

import * as S from "./styles";

const Products = () => {
  return (
    <S.Container>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </S.Container>
  );
};

export default Products;
