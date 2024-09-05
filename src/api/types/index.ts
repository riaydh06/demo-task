export type APIResponse<T> = {
  result: T;
};

export type ApiPagination = {
  first: number;
  last: number;
  next?: number;
  prev?: number;
  count: number;
};

export type Pagination = {
  page: number;
  pageSize: number;
  hasMore: boolean;
  totalCount: number;
  currentCount?: number;
  totalPages: number;
};

export type PaginatedAPIResponse<T> = {
  result: T[];
  meta: {
    pagination: ApiPagination;
  };
};
