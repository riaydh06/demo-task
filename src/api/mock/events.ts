import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { EventsType } from '../../types/events';
import { PaginatedAPIResponse } from '../types';

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

export const generateEvents = (
  page: number,
  pageSize: number,
): PaginatedAPIResponse<EventsType> => {
  const numArray = Array(pageSize).fill(0);
  const response: PaginatedAPIResponse<EventsType> = {
    meta: {
      ...generatePaginationMeta(page, pageSize),
    },
    result: numArray.map((_, idx): EventsType => {
      return {
        id: idx,
        name: faker.person.fullName(),
        location: 'Dhaka',
        date: dayjs(faker.date.future()).format('L'),
        time: dayjs(faker.date.future()).format('HH:mm:ss'),
        description: faker.lorem.lines(),
      };
    }),
  };

  return response;
};

const generatePaginationMeta = (page: number, pageSize: number) => ({
  pagination: {
    first: 1,
    last: 10,
    next: page === 1 ? undefined : page + 1,
    prev: page - 1,
    count: pageSize * 10,
  },
});
