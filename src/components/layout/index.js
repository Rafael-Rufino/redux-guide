import { Footer } from "../footer";
import Header from "../header";
import Products from "../products";

import * as S from "./styles";

const Layout = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Products />
      </S.Content>
      <Footer />
    </S.Container>
  );
};

export default Layout;
