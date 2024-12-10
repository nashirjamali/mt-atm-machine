import { NextResponse } from 'next/server';
import users from '../data';

export async function POST(req: Request) {
  const { userId, amount } = await req.json();
  const user = users.find(u => u.id === parseInt(userId));

  if (user) {
    user.balance += amount;
    return NextResponse.json({
      message: 'Deposit successful',
      balance: user.balance,
    });
  } else {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
}
