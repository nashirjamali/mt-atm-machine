'use client';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
} from '@nextui-org/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { authUser } from './Login.handler';
import { setAuthenticatedUser } from '@/lib/features/auth/authSlice';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  pin: Yup.number().required('Required'),
});

export default function Login() {
  const accounts = useAppSelector(state => state.accounts);
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      username: '',
      pin: '',
    },
    onSubmit: () => {
      setErrorMessage(null);

      try {
        const user = authUser(values.username, parseInt(values.pin), accounts);

        dispatch(
          setAuthenticatedUser({
            authenticatedUser: user.username,
          })
        );
      } catch (error) {
        console.log(error);

        setErrorMessage((error as Error).message);
      }
    },
    validationSchema: LoginSchema,
  });

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-bold">Error!</span> {errorMessage}
        </div>
      )}
      <Card className="w-96">
        <CardHeader className="flex justify-center items-center">
          <h1 className="text-slate-950 font-bold text-xl">Login User</h1>
        </CardHeader>
        <Divider />
        <CardBody className="p-10 flex flex-col gap-8">
          <Input
            label="Username"
            variant="bordered"
            className="text-slate-950"
            name="username"
            value={values.username}
            onChange={handleChange}
            errorMessage={errors.username}
            isInvalid={errors.username ? true : false}
          />
          <Input
            label="PIN"
            variant="bordered"
            className="text-slate-950"
            name="pin"
            value={values.pin}
            onChange={handleChange}
            errorMessage={errors.pin}
            isInvalid={errors.pin ? true : false}
          />
        </CardBody>
        <Divider />
        <CardFooter>
          <Button className="w-full" color="primary" type="submit">
            SUBMIT
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
