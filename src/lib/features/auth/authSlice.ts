import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Auth } from './authSlice.types';

const initialState: Auth = {
  authenticatedUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticatedUser: (state, action: PayloadAction<Auth>) => ({
      authenticatedUser: action.payload.authenticatedUser,
    }),
  },
});

export const { setAuthenticatedUser } = authSlice.actions;

export default authSlice.reducer;
