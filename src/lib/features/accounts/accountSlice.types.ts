export type Transaction = {
  date: string;
  type: 'deposit' | 'withdraw';
  amount: number;
};

export type Account = {
  username: string;
  pin: number;
  balance: number;
  transactions: Transaction[];
};

export type Accounts = {
  [username: string]: Account;
};

export type DepositPayload = {
  username: string;
  amount: number;
};

export type WithdrawPayload = {
  username: string;
  amount: number;
};
