import React from "react";

import * as S from "./styles";

const CustomButton = ({ children, startIcon, ...rest }) => {
  return (
    <S.CustomButtonContainer {...rest}>
      {startIcon && <S.IconContainer>{startIcon}</S.IconContainer>}

      {children}
    </S.CustomButtonContainer>
  );
};

export default CustomButton;
