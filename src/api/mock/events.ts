import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { EventType } from '../../types/events';
import { PaginatedAPIResponse } from '../types';

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

export const generateEvents = (
  page: number,
  pageSize: number,
): PaginatedAPIResponse<EventType> => {
  const numArray = Array(pageSize).fill(0);
  const response: PaginatedAPIResponse<EventType> = {
    meta: {
      ...generatePaginationMeta(page, pageSize),
    },
    result: numArray.map((_): EventType => {
      return {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        date: dayjs(faker.date.future()).format('L'),
        time: dayjs(faker.date.future()).format('HH:mm:ss'),
        description: faker.lorem.lines(),
        like: faker.number.int(100),
      };
    }),
  };

  return response;
};

export const generateMockEventItem = (data: {
  name: string;
  description: string;
  like: number;
  date: string;
}) => {
  return {
    id: faker.string.uuid(),
    time: dayjs(faker.date.future()).format('HH:mm:ss'),
    ...data,
  };
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
