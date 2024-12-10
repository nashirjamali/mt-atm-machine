import { Account } from '@/lib/features/accounts/accountslice.types';

export const authUser = (
  username: string,
  pin: number,
  accountsData: Account[]
): Account => {
  const user = accountsData.find(account => account.username == username);

  if (!user) {
    throw new Error('User does not exists');
  }

  if (user.pin !== pin) {
    throw new Error('Username or PIN is invalid');
  }

  return user;
};
