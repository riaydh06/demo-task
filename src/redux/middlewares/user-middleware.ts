import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { StoreType } from '@reducers/types';
import { isRequestCancelled } from '@helpers/routing';
import { getUser } from '@api/user';
import { getUserFailed, getUserSuccess } from '@reducers/user-reducer';

export const userMiddleware: Middleware<Record<string, unknown>, StoreType> = ({
  getState,
  dispatch,
}: MiddlewareAPI) => {
  return (next: Dispatch<AnyAction>) => {
    return async (action) => {
      const nextAction = next(action);
      switch (action.type) {
        case 'getUserReducer/getUserRequest': {
          try {
            const { data } = await getUser();
            dispatch(getUserSuccess(data));
          } catch (error) {
            if (!isRequestCancelled(error)) {
              dispatch(getUserFailed({}));
            }
          }
          break;
        }
      }
      return nextAction;
    };
  };
};
