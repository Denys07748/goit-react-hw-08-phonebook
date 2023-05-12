import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
  },
  extraReducers: {},
});

export const authReducer = authSlice.reducer;
