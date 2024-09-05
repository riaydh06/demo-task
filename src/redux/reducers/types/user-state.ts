import { ReduxRequest } from './redux-request';

export type UserType = {
  name?: string;
  role?: 'admin' | 'support_user';
  email?: string;
  token?: string;
  status?: 'paid' | 'unpaid';
};

export interface UserState extends ReduxRequest<UserType> {}
