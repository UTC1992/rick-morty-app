export interface IAuthData {
  email: string
  password: string
}

export class AuthData implements IAuthData {
  email: string
  password: string

  constructor(email = '', password = '') {
    this.email = email
    this.password = password
  }
}
