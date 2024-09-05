import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const getUserReducer = createSlice({
  name: 'userReducer',
  initialState: {},
  reducers: {
    getUserRequest(state, action: PayloadAction<any>) {
      return action.payload;
    },
    getUserSuccess(state, action: PayloadAction<any>) {
      return action.payload;
    },
    getUserFailed(state, action: PayloadAction<any>) {
      return action.payload;
    },
  },
});

export const { getUserRequest, getUserSuccess, getUserFailed } =
  getUserReducer.actions;

export default getUserReducer;
