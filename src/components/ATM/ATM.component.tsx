'use client';

import { Account } from '@/lib/features/accounts/accountSlice.types';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
} from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { deposit, withdraw } from '@/lib/features/accounts/accountsSlice';
import { setAuthenticatedUser } from '@/lib/features/auth/authSlice';

const ATMSchema = Yup.object().shape({
  amount: Yup.number(),
});

export default function ATM() {
  const dispatch = useAppDispatch();

  const authenticatedUser = useAppSelector(
    state => state.auth.authenticatedUser
  );
  const accounts = useAppSelector(state => state.accounts);

  const {
    values: { amount },
    errors,
    handleChange,
  } = useFormik({
    initialValues: {
      amount: '',
    },
    validationSchema: ATMSchema,
    onSubmit: () => {},
  });

  const [account, setAccount] = useState<Account>();
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    if (authenticatedUser) setAccount(accounts[authenticatedUser]);
  }, [authenticatedUser, accounts]);

  const handleWithdraw = () => {
    if (account && account?.balance >= parseInt(amount)) {
      dispatch(
        withdraw({
          username: account.username,
          amount: parseInt(amount),
        })
      );
    } else {
      setErrorMessage('Insufficient balance');

      setTimeout(() => setErrorMessage(undefined), 2000);
    }
  };

  const handleDeposit = () => {
    if (account) {
      dispatch(
        deposit({
          username: account?.username,
          amount: parseInt(amount),
        })
      );
    }
  };

  const handleLogout = () =>
    dispatch(setAuthenticatedUser({ authenticatedUser: undefined }));

  return (
    <Card className="w-96">
      {errorMessage && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-bold">Error!</span> {errorMessage}
        </div>
      )}
      <CardHeader className="flex justify-center items-center">
        <h1 className="text-slate-950 font-bold text-xl">ATM</h1>
      </CardHeader>
      <Divider />
      {account && (
        <CardBody className="p-10 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-slate-950 font-normal text-sm">
              Account Balance
            </p>
            <h1 className="text-slate-950 font-bold text-2xl">
              ${account?.balance}
            </h1>
          </div>
          <Divider />
          <div className="flex flex-col gap-5">
            <Input
              label="Amount"
              variant="bordered"
              type="number"
              name="amount"
              className="text-slate-950"
              value={amount}
              onChange={handleChange}
              errorMessage={errors.amount}
              isInvalid={errors.amount ? true : false}
            />
            <div className="flex flex-row gap-2 justify-around">
              <Button
                variant="solid"
                color="primary"
                fullWidth={true}
                onClick={handleDeposit}
              >
                Deposit
              </Button>
              <Button
                variant="bordered"
                color="primary"
                fullWidth={true}
                onClick={handleWithdraw}
              >
                Withdraw
              </Button>
            </div>
          </div>
        </CardBody>
      )}
      <Divider />
      <CardFooter>
        <Button color="danger" onClick={handleLogout}>
          Logout
        </Button>
      </CardFooter>
    </Card>
  );
}
