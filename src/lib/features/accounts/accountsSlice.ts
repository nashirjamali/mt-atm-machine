import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Accounts, DepositPayload } from './accountSlice.types';

const initialState: Accounts = {
  user1: {
    username: 'user1',
    pin: 1234,
    balance: 0,
    transactions: [],
  },
  user2: {
    username: 'user2',
    pin: 1234,
    balance: 0,
    transactions: [],
  },
};

const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    deposit: (
      state,
      { payload: { username, amount } }: PayloadAction<DepositPayload>
    ) => {
      const accountState = state[username];

      return {
        ...state,
        [username]: {
          ...accountState,
          balance: accountState.balance + amount,
          transaction: [
            ...accountState.transactions,
            {
              date: Date.now(),
              amount,
              type: 'deposit',
            },
          ],
        },
      };
    },
    withdraw: (
      state,
      { payload: { username, amount } }: PayloadAction<DepositPayload>
    ) => {
      const accountState = state[username];

      return {
        ...state,
        [username]: {
          ...accountState,
          balance: accountState.balance - amount,
          transaction: [
            ...accountState.transactions,
            {
              date: Date.now(),
              amount,
              type: 'withdraw',
            },
          ],
        },
      };
    },
  },
});

export const { deposit, withdraw } = accountSlice.actions;

export default accountSlice.reducer;
