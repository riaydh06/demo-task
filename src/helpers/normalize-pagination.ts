import { ApiPagination, Pagination } from '@api/types';

export const normalizePagination = (
  page: number,
  pageSize: number,
  pagination: ApiPagination,
  results: Array<any>,
): Pagination => {
  return {
    page,
    pageSize,
    hasMore: Boolean(pagination?.next),
    totalCount: pagination.count,
    currentCount: results.length,
    totalPages: pagination.count / pageSize + (pagination.count % pageSize),
  };
};
