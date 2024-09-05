import { StoreType } from '@reducers/types';
import { UserState } from '@reducers/types/user-state';

export const getUserState = (state: StoreType): UserState => state.user;
