import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catagory: ['Under construction !!!'],
};

const catagoryReducer = createSlice({
  name: 'catagory',
  initialState,
  reducers: {
    checkStatus(state) {
      return state.catagory;
    },
  },
});

export const { checkStatus } = catagoryReducer.actions;

export default catagoryReducer.reducer;
