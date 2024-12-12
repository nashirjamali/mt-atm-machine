export type Transaction = {
  date: number;
  type: 'Deposit' | 'Withdraw';
  amount: number;
};

export type Account = {
  username: string;
  balance: number;
  transactions: Transaction[];
};

export type Accounts = {
  [username: string]: Account;
};

export type SetAccountPayload = {
  username: string;
};

export type DepositPayload = {
  username: string;
  amount: number;
};

export type WithdrawPayload = {
  username: string;
  amount: number;
};
