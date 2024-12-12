import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
  Accounts,
  DepositPayload,
  SetAccountPayload,
  Transaction,
} from './accountSlice.types';

const initialState: Accounts = {};

const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setAccount: (
      state,
      { payload: { username } }: PayloadAction<SetAccountPayload>
    ) => {
      if (!(username in state)) {
        return {
          ...state,
          [username]: {
            balance: 0,
            transactions: [],
            username: username,
          },
        };
      }

      return state;
    },
    deposit: (
      state,
      { payload: { username, amount } }: PayloadAction<DepositPayload>
    ) => {
      const accountState = state[username];
      const transaction: Transaction = {
        date: Date.now(),
        amount,
        type: 'Deposit',
      };

      return {
        ...state,
        [username]: {
          ...accountState,
          balance: accountState.balance + amount,
          transactions: [transaction, ...accountState.transactions],
        },
      };
    },
    withdraw: (
      state,
      { payload: { username, amount } }: PayloadAction<DepositPayload>
    ) => {
      const accountState = state[username];
      const transaction: Transaction = {
        date: Date.now(),
        amount,
        type: 'Withdraw',
      };

      return {
        ...state,
        [username]: {
          ...accountState,
          balance: accountState.balance - amount,
          transactions: [transaction, ...accountState.transactions],
        },
      };
    },
  },
});

export const { deposit, withdraw, setAccount } = accountSlice.actions;

export default accountSlice.reducer;
