import React from "react";

import * as S from "./styles";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "outlined" | "danger";
  fontSize?: "small" | "medium" | "large";
}

const Button = ({ variant = "primary", ...props }: ButtonProps) => {
  return (
    <S.StyledButton variant={variant} {...props}>
      {props.children}
    </S.StyledButton>
  );
};

export default Button;
