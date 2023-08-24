import * as S from "./styles";

import { useSelector, useDispatch } from "react-redux";

import CartActionTypes from "../../redux/cart/action-types";

import products from "../../data/products";
import ProductItem from "../product-item/index";

import { Pagination, productsPerPage } from "./components/pagination";

const Products = () => {
  const { currentPage } = useSelector((rootReducer) => rootReducer.cartReducer);
  const dispatch = useDispatch();
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const changePage = (newPage) => {
    dispatch({
      type: CartActionTypes.CHANGE_PAGE,
      payload: newPage,
    });
  };

  return (
    <S.Container>
      <S.Products>
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))
        ) : (
          <p>Nenhum produto encontrado</p>
        )}
      </S.Products>

      <Pagination
        items={products}
        currentPage={currentPage}
        onPageChange={changePage}
        active={(pageIndex) => pageIndex + 1 === currentPage}
      />
    </S.Container>
  );
};

export default Products;
