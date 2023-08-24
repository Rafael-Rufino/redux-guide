import * as S from "./styles";

interface CustomButtonProps {
  children: React.ReactNode;
  startIcon?: string | React.ReactNode;
  onClick?: () => void;
}

const CustomButton = ({ children, startIcon, ...rest }: CustomButtonProps) => {
  return (
    <S.CustomButtonContainer {...rest}>
      {startIcon && <S.IconContainer>{startIcon}</S.IconContainer>}

      {children}
    </S.CustomButtonContainer>
  );
};

export default CustomButton;
