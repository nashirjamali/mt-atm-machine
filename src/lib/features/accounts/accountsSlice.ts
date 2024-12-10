import { createSlice } from '@reduxjs/toolkit';
import { Account } from './accountslice.types';

const initialState: Account[] = [
  {
    username: 'user1',
    pin: 1234,
    balance: 0,
    transactions: [],
  },
  {
    username: 'user2',
    pin: 1234,
    balance: 0,
    transactions: [],
  },
];

const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {},
});

export default accountSlice.reducer;
