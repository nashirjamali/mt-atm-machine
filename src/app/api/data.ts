export type User = {
  id: number;
  username: string;
  pin: string;
  balance: number;
};

const users: User[] = [
  {
    id: 1,
    username: 'user1',
    pin: '1234',
    balance: 1000,
  },
  {
    id: 2,
    username: 'user2',
    pin: '5678',
    balance: 2000,
  },
];

export default users;
