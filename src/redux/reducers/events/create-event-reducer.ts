import {
  getRequestingState,
  getFailedState,
  getSuccessState,
} from './../../../utils/store';
import { CreateEventState } from '@reducers/types/event-state';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: CreateEventState = {
  request: false,
};

const createEventReducer = createSlice({
  name: 'createEventReducer',
  initialState,
  reducers: {
    createEventRequest(state, action: PayloadAction<any>) {
      return {
        ...getRequestingState(),
      };
    },
    createEventSuccess(state, action: PayloadAction<any>) {
      console.log(action.payload);
      return {
        ...getSuccessState(),
      };
    },
    createEventFailed(state, action: PayloadAction<any>) {
      return {
        ...getFailedState(),
      };
    },
  },
});

export const { createEventRequest, createEventSuccess, createEventFailed } =
  createEventReducer.actions;

export default createEventReducer;
