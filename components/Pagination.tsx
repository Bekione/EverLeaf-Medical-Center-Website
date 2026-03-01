import React from "react";
import Button from "./Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="mt-16 flex justify-center">
      <nav className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-10 h-10 p-0 flex items-center justify-center border-border"
          icon="chevron_left"
        />
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "primary" : "secondary"}
            size="sm"
            onClick={() => onPageChange(page)}
            className="w-10 h-10 p-0 flex items-center justify-center font-medium border-border"
          >
            {page}
          </Button>
        ))}
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-10 h-10 p-0 flex items-center justify-center border-border"
          icon="chevron_right"
        />
      </nav>
    </div>
  );
};

export default Pagination;
