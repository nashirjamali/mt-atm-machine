import { Account, Accounts } from '@/lib/features/accounts/accountSlice.types';

export const authUser = (
  username: string,
  pin: number,
  accountsData: Accounts
): Account => {
  const user = accountsData[username];

  if (!user) {
    throw new Error('User does not exists');
  }

  if (user.pin !== pin) {
    throw new Error('Username or PIN is invalid');
  }

  return user;
};
