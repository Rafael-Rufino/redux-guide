import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  padding: 20px;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  flex-direction: column;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 786px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
