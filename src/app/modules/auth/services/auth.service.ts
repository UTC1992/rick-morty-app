import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { JwtHelperService } from '@auth0/angular-jwt'
import * as moment from 'moment'
import { Observable } from 'rxjs'
import { IAuthData } from '../../../core/models/auth.model'
import { IAuthResponse } from '../../../core/types/auth-response.type'
import { IGenericResponse } from '../../../core/types/generic-response.type'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  momentLib = moment
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
    const expiresAt = this.momentLib().add(tokenData.exp, 'second')

    localStorage.setItem('token', authResult.token)
    localStorage.setItem('expiresIn', JSON.stringify(expiresAt.valueOf()))
  }

  logout(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('expiresIn')
  }

  isLoggedIn(): boolean {
    return this.momentLib().isBefore(this.getExpiration())
  }

  getToken(): string {
    const token = localStorage.getItem('token') || ''
    return token
  }

  getExpiration(): moment.MomentInput {
    const expiration = localStorage.getItem('expiresIn') || '0'
    const expiresAt = JSON.parse(expiration)
    return this.momentLib(expiresAt)
  }
}