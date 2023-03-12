export interface IUser {
  id: number
  fullName: string
  nickname: string
  email: string
  password: string
  image: string
}

export class UserModel implements IUser {
  id: number
  fullName: string
  nickname: string
  email: string
  password: string
  image: string

  constructor(
    id = 0,
    fullName = '',
    nickname = '',
    email = '',
    password = '',
    image = '',
  ) {
    this.id = id
    this.fullName = fullName
    this.nickname = nickname
    this.email = email
    this.password = password
    this.image = image
  }
}
