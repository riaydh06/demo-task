import { Tuple, configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/index';
import { userMiddleware } from '@middlewares/user-middleware';
import { eventsMiddleware } from '@middlewares/events-middleware';

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(userMiddleware as any, eventsMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
