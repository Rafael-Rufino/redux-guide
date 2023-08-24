import React from "react";

import * as S from "./styles";

interface LoadingProps {
  size?: "small" | "medium" | "large" | "xlarge";
  borderColor?: "primary" | "secondary";
}

const Loading: React.FC<LoadingProps> = ({
  size = "xlarge",
  borderColor = "primary",
}) => {
  const sizes = {
    small: "1.25rem",
    medium: "2rem",
    large: "4rem",
    xlarge: "8rem",
  };

  const borderColors = {
    primary: "blue",
    secondary: "gray",
  };

  return (
    <S.LoadingContainer>
      <S.Content>
        <S.Spinner size={sizes[size]} borderColor={borderColors[borderColor]} />
      </S.Content>
    </S.LoadingContainer>
  );
};

export default Loading;
