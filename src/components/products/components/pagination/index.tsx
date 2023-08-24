import * as S from "./styles";

export const productsPerPage = 6;

interface PaginationProps {
  items: any[];
  currentPage: number;
  onPageChange: (page: number) => void;
  active?: boolean;
}

export const Pagination = ({
  items,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(items.length / productsPerPage);

  const isPageActive = (pageIndex: any) =>
    pageIndex === currentPage || (pageIndex === 1 && currentPage === 1);

  return (
    <S.PaginationContainer>
      {Array.from({ length: totalPages }, (_, index) => (
        <S.PageButton
          active={isPageActive(index + 1)}
          key={index}
          onClick={() => onPageChange(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </S.PageButton>
      ))}
    </S.PaginationContainer>
  );
};
