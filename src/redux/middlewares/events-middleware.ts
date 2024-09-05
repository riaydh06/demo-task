import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { StoreType } from '@reducers/types';
import { isRequestCancelled } from '@helpers/routing';
import { createEvents, getEvents } from '@api/events';
import {
  createEventFailed,
  createEventSuccess,
} from '@reducers/events/create-event-reducer';
import {
  getEventsSuccess,
  getEventsFailed,
  createEventsListUpdate,
} from '@reducers/events/get-events-reducer';

export const eventsMiddleware: Middleware<
  Record<string, unknown>,
  StoreType
> = ({ getState, dispatch }: MiddlewareAPI) => {
  return (next: Dispatch<AnyAction>) => {
    return async (action) => {
      const nextAction = next(action);
      switch (action.type) {
        case 'createEventReducer/createEventRequest': {
          try {
            const { payload } = action as any;
            console.log(payload);
            await createEvents(payload);

            dispatch(createEventSuccess(payload));
            dispatch(createEventsListUpdate(payload));
          } catch (error) {
            if (!isRequestCancelled(error)) {
              dispatch(createEventFailed({}));
            }
          }
          break;
        }

        case 'getEventsReducer/getEventsRequest': {
          try {
            const { data } = await getEvents(1);
            dispatch(getEventsSuccess(data));
          } catch (error) {
            if (!isRequestCancelled(error)) {
              dispatch(getEventsFailed({}));
            }
          }
          break;
        }
      }
      return nextAction;
    };
  };
};
