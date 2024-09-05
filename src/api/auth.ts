import axios from 'axios';
import { faker } from '@faker-js/faker';
import { URLS } from '@constants/urls';
import api from '@helpers/api';
import { UserType } from '@reducers/types/user-state';

export const postSignUp = (() => {
  const cancelToken = axios.CancelToken;
  let source = cancelToken.source();
  let isRequestInProcess = false;

  return async (email: string, password: string): Promise<{ data: any }> => {
    if (process.env.REACT_APP_SIGN_UP_DISABLED === 'true') {
      return new Promise((resolve) => {
        setTimeout(
          () =>
            resolve({
              data: {
                name: 'test name',
                email,
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
        .post(URLS.SIGN_UP, { email, password })
        .then((response) => {
          return { data: response.data.result };
        })
        .finally(() => {
          isRequestInProcess = false;
        });
    }
  };
})();

export const postSignIn = (() => {
  const cancelToken = axios.CancelToken;
  let source = cancelToken.source();
  let isRequestInProcess = false;

  return async (
    email: string,
    password: string,
  ): Promise<{ data: UserType }> => {
    if (process.env.REACT_APP_SIGN_IN_DISABLED === 'true') {
      return new Promise((resolve) => {
        setTimeout(
          () =>
            resolve({
              data: {
                name: faker.person.fullName(),
                token: 'test token',
                role: 'admin',
                email,
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
        .post(URLS.SIGN_IN, { email, password })
        .then((response) => {
          return { data: response.data.result };
        })
        .finally(() => {
          isRequestInProcess = false;
        });
    }
  };
})();
