import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

type PostPaginationType = {
  currentPage: number;
  onPageChange: (newPage: number) => void;
  totalItemNum: number;
  pageSize: number;
  className?: string;
};
const PostPagination = ({
  currentPage,
  onPageChange,
  totalItemNum,
  className,
  pageSize,
}: PostPaginationType) => {
  if (totalItemNum <= pageSize) return <></>;

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);

    const params = new URLSearchParams(window.location.search);
    params.set("page", String(newPage));
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
  };
  return (
    <div className={cn("flex justify-center mt-6 mb-40", className)}>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href=""
              onClick={() => {
                if (currentPage === 1) return;

                handlePageChange(currentPage - 1);
              }}
            />
          </PaginationItem>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => {
                  handlePageChange(currentPage - 1);
                }}
              >
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink
              isActive
              href=""
              onClick={() => {
                handlePageChange(currentPage);
              }}
            >
              {currentPage}
            </PaginationLink>
          </PaginationItem>

          {currentPage < Math.ceil(totalItemNum / pageSize) && (
            <PaginationItem
              onClick={() => {
                handlePageChange(currentPage + 1);
              }}
            >
              <PaginationLink href="">{currentPage + 1}</PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => {
                if (currentPage === Math.ceil(totalItemNum / pageSize)) return;
                handlePageChange(currentPage + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PostPagination;
