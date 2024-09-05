import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@helpers/redux';
import { UserType } from '@reducers/types/user-state';
import { getUserRequest } from '@reducers/user-reducer';
import { getUserState } from '@selectors/user-selector';
import { UserState } from '@reducers/types/user-state';
import { getStorage } from '@utils/local-store';
import { LS_KEYS } from '@constants/local-store';

interface UseUser {
  requested: boolean;
  isLogin: boolean;
  user?: UserType;
}

export const useUser = (): UseUser => {
  const isToken = getStorage(LS_KEYS.AUTH_TOKEN);
  const dispatch = useDispatch();
  const data = useAppSelector<UserState>(getUserState);

  const requested = data.request;
  const isLogin = Boolean(data.data?.token);

  useEffect(() => {
    if (isToken) {
      dispatch(getUserRequest({}));
    }
  }, [dispatch, isToken]);

  return {
    requested,
    user: data.data,
    isLogin,
  };
};
