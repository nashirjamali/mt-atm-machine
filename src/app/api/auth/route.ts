import { NextResponse } from 'next/server';
import users from '../data';

export async function POST(req: Request) {
  const { username, pin } = await req.json();
  const user = users.find(u => u.username === username && u.pin === pin);

  if (user) {
    return NextResponse.json({
      message: 'Authentication successful',
      userId: user.id,
    });
  } else {
    return NextResponse.json(
      { message: 'Invalid username or PIN' },
      { status: 401 }
    );
  }
}
