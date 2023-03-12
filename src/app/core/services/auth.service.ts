import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { IAuthData } from '../models/auth.model'
import { IUser } from '../models/user.model'
import { IGenericResponse } from '../types/generic-response.type'
import { IAuthResponse } from '../types/auth-response.type'
import { JwtHelperService } from '@auth0/angular-jwt'
import * as moment from 'moment'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(authData: IAuthData): Observable<IGenericResponse<IAuthResponse>> {
    return this.http.post<IGenericResponse<IAuthResponse>>(
      '/api/auth',
      authData,
    )
  }

  setSession(authResult: IAuthResponse): void {
    const helper = new JwtHelperService()
    const tokenData = helper.decodeToken(authResult.token)
    const expiresAt = moment().add(tokenData.exp, 'second')

    localStorage.setItem('token', authResult.token)
    localStorage.setItem('expiresIn', JSON.stringify(expiresAt.valueOf()))
  }

  logout(): void {
    localStorage.removeItem('token')
  }

  isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration())
  }

  getToken(): string {
    const token = localStorage.getItem('token') || ''
    return token
  }

  getExpiration(): moment.MomentInput {
    const expiration = localStorage.getItem('expiresIn') || ''
    const expiresAt = JSON.parse(expiration)
    return moment(expiresAt)
  }
}