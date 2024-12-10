'use client'

import { useState } from 'react';
import Login from '@/components/Login/Login.component';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Login />
    </div>
  );
}
