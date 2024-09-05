import { getRequestingState, getFailedState } from './../../../utils/store';
import { GetEventsState } from '@reducers/types/event-state';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: GetEventsState = {
  request: false,
};

const getEventsReducer = createSlice({
  name: 'getEventsReducer',
  initialState,
  reducers: {
    getEventsRequest(state, action: PayloadAction<any>) {
      return { ...getRequestingState({ data: [] }) };
    },
    getEventsSuccess(state, action: PayloadAction<any>) {
      const { payload } = action;
      console.log(payload);
      return {
        ...state,
        data: [...payload, ...(state.data ? state.data : [])],
      };
    },
    getEventsFailed(state, action: PayloadAction<any>) {
      return {
        ...getFailedState({ data: [] }),
      };
    },
  },
});

export const { getEventsRequest, getEventsSuccess, getEventsFailed } =
  getEventsReducer.actions;

export default getEventsReducer;
