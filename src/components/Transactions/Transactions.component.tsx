import { Account } from '@/lib/features/accounts/accountSlice.types';
import { Divider } from '@nextui-org/react';
import React from 'react';

interface Props {
  account?: Account;
}

export default function Transactions({ account }: Props) {
  return (
    <div className="pt-10 pl-10 flex flex-col gap-8 border-l-2 border-l-gray-200 w-80">
      <div className="flex flex-col gap-2">
        <p className="text-slate-950 font-normal text-sm">Transactions</p>
      </div>
      <div className="flex flex-col gap-8 h-60 overflow-y-scroll pr-10">
        {account?.transactions.map(transaction => (
          <div key={transaction.date} className="flex flex-col gap-2">
            <p className="font-medium text-sm text-gray-800">
              {new Date(transaction.date).toDateString()}
            </p>
            <div className="flex justify-between">
              <p className="font-bold text-lg text-slate-950">
                ${transaction.amount}
              </p>
              <p className="font-medium text-sm text-green-900">
                {transaction.type}
              </p>
            </div>
            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
}
