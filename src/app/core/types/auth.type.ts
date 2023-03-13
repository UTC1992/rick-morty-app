import { IUser } from '../models/user.model'

export interface IAuthResponse {
  user: IUser
  token: string
}

export interface IAuthData {
  email: string
  password: string
}
