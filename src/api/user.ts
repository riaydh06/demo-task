import axios from 'axios';
import { faker } from '@faker-js/faker';
import { URLS } from '@constants/urls';
import api from '@helpers/api';
import { UserType } from '@reducers/types/user-state';

export const getUser = (() => {
  const cancelToken = axios.CancelToken;
  let source = cancelToken.source();
  let isRequestInProcess = false;
  return async (): Promise<{ data: UserType }> => {
    if (process.env.REACT_APP_GET_USER_DISABLED === 'true') {
      return new Promise((resolve) => {
        setTimeout(
          () =>
            resolve({
              data: {
                name: faker.person.fullName(),
                token: 'test token',
                role: 'admin',
                email: faker.internet.email(),
                status: 'paid',
              },
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
        .get(URLS.USER)
        .then((response) => {
          return { data: response.data.result };
        })
        .finally(() => {
          isRequestInProcess = false;
        });
    }
  };
})();
