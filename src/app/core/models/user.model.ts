interface IUser {
  id: number;
  fullName: string;
  nickname: string;
  email: string;
  password: string;
}

export class UserModel implements IUser {
  id: number;
  fullName: string;
  nickname: string;
  email: string;
  password: string;

  constructor(
    id: number = 0,
    fullName: string = '',
    nickname: string = '',
    email: string = '',
    password: string = ''
  ) {
    this.id = id;
    this.fullName = fullName;
    this.nickname = nickname;
    this.email = email;
    this.password = password;
  }
}

