import { generateMockEventItem } from '@api/mock/events';
import { getRequestingState, getFailedState } from './../../../utils/store';
import { GetEventsState } from '@reducers/types/event-state';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { stat } from 'fs';

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
    createEventsListUpdate(state, action: PayloadAction<any>) {
      return {
        ...state,
        data: [
          { ...generateMockEventItem(action.payload) },
          ...(state.data ? state.data : []),
        ],
      };
    },

    updateLike(state, action: PayloadAction<any>) {
      console.log(action.payload);

      const data = [...(state.data ? state.data : [])];
      if (data) {
        let foundIndex = data?.findIndex((item) => action.payload === item.id);
        const item = data[foundIndex];

        const newItem = {
          ...item,
          like: item?.like + 1,
        };
        data[foundIndex] = newItem;
      }

      return {
        ...state,
        data,
      };
    },
  },
});

export const {
  getEventsRequest,
  getEventsSuccess,
  getEventsFailed,
  createEventsListUpdate,
  updateLike,
} = getEventsReducer.actions;

export default getEventsReducer;
