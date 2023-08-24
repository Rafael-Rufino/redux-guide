import styled from "styled-components";

interface LoadingContainerProps {
  noLabel?: boolean;
}

interface SpinnerProps {
  size: string;
  borderColor: string;
}

export const LoadingContainer = styled.div<LoadingContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.noLabel ? "100vh" : "auto")};
`;

export const Spinner = styled.div<SpinnerProps>`
  position: relative;
  z-index: 20;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  border-left: 2px solid #333;
  border-right: 2px solid #333;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Label = styled.span`
  position: relative;
  z-index: 10;
  margin-top: 10px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
