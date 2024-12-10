'use client';

import Login from '@/components/Login/Login.component';
import { useAppSelector } from '@/lib/hooks';
import ATM from '@/components/ATM/ATM.component';

export default function Home() {
  const isAuthtenticated = useAppSelector(state =>
    state.auth.authenticatedUser ? true : false
  );

  return (
    <div className="flex justify-center items-center min-h-screen">
      {isAuthtenticated ? <ATM /> : <Login />}
    </div>
  );
}
