export type Transaction = {
  date: string;
  type: 'transfer' | 'deposit' | 'withdraw';
  ammount: number;
  from: string;
  to?: string;
};

export type Account = {
  username: string;
  pin: number;
  balance: number;
  transactions: Transaction[];
};
