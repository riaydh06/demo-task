import axios from 'axios';
// import { faker } from '@faker-js/faker';
import { URLS } from '@constants/urls';
import api from '@helpers/api';
import { normalizePagination } from '@helpers/normalize-pagination';
import { generateEvents } from './mock/events';
import { Pagination } from './types';
import { EventType } from '../types/events';

export const createEvents = (() => {
  const cancelToken = axios.CancelToken;
  let source = cancelToken.source();
  let isRequestInProcess = false;

  return async (data: any = {}): Promise<{ data: any }> => {
    if (process.env.REACT_APP_CREATE_EVENT_DISABLED === 'true') {
      return new Promise((resolve) => {
        setTimeout(() => resolve(data), 1000);
      });
    } else {
      if (isRequestInProcess) {
        source.cancel();
        source = cancelToken.source();
      }

      isRequestInProcess = true;
      return api
        .post(URLS.CREATE_EVENT, { ...data })
        .then((response) => {
          return { data: response.data.result };
        })
        .finally(() => {
          isRequestInProcess = false;
        });
    }
  };
})();

export const getEvents = (() => {
  const cancelToken = axios.CancelToken;
  let source = cancelToken.source();
  let isRequestInProcess = false;

  return async (
    page: number,
    pageSize: number = 5,
  ): Promise<{ data: EventType[]; pagination: Pagination }> => {
    if (process.env.REACT_APP_GET_EVENTS_DISABLED === 'true') {
      const { meta, result } = generateEvents(page, pageSize);
      return new Promise((resolve) => {
        setTimeout(
          () =>
            resolve({
              data: result,
              pagination: normalizePagination(
                page,
                pageSize,
                meta.pagination,
                result,
              ),
            }),
          1000,
        );
      });
    } else {
      if (isRequestInProcess) {
        source.cancel();
        source = cancelToken.source();
      }

      isRequestInProcess = true;
      return api
        .post(URLS.GET_EVENTS)
        .then((response) => {
          return { data: response.data.result, pagination: response.data.meta };
        })
        .finally(() => {
          isRequestInProcess = false;
        });
    }
  };
})();
