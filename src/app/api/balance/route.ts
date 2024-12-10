import { NextResponse } from 'next/server';
import users from '../data';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');

  const user = users.find(u => u.id === parseInt(userId!));

  if (user) {
    return NextResponse.json({ balance: user.balance });
  } else {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
}
