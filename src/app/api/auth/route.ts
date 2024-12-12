import { NextResponse } from 'next/server';

const users = [
  {
    username: 'user1',
    pin: '1234',
  },
  {
    username: 'user2',
    pin: '1234',
  },
];

export async function POST(req: Request) {
  const { username, pin } = await req.json();

  const fetchedUser = users.find(user => user.username == username);

  if (!fetchedUser) {
    return NextResponse.json(
      {
        message: "User doesn't exists",
      },
      {
        status: 404,
      }
    );
  }

  if (fetchedUser.pin !== pin) {
    return NextResponse.json(
      {
        message: 'Username or PIN is invalid',
      },
      {
        status: 403,
      }
    );
  }

  return NextResponse.json(
    {
      message: 'Success',
      data: fetchedUser,
    },
    {
      status: 200,
    }
  );
}
