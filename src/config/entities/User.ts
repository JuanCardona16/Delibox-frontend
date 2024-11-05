interface User {
  uuid: string;
  usename: string;
  email: string;
  password: string;
}

export type createUserDto = Omit<User, 'uuid'>
export type updateUserDto = Omit<Partial<User>, 'uuid'>