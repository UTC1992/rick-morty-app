import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { JwtHelperService } from '@auth0/angular-jwt'
import * as moment from 'moment'
import { Observable } from 'rxjs'
import { IAuthData } from '../../models/auth.model'
import { IAuthResponse } from '../../types/auth.type'
import { IGenericResponse } from '../../types/generic-response.type'
import { environment } from '../../../../environments/environment.development'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.apiUrl
  momentLib = moment
  constructor(private http: HttpClient) {}

  login(authData: IAuthData): Observable<IGenericResponse<IAuthResponse>> {
    return this.http.post<IGenericResponse<IAuthResponse>>(
      `${this.url}/api/auth`,
      authData,
    )
  }

  setSession(authResult: IAuthResponse): void {
    const helper = new JwtHelperService()
    const tokenData = helper.decodeToken(authResult.token)
    const expiresAt = this.momentLib().add(tokenData.exp, 'second')

    localStorage.setItem('token', authResult.token)
    localStorage.setItem('userId', tokenData.id)
    localStorage.setItem('expiresIn', JSON.stringify(expiresAt.valueOf()))
  }

  logout(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('expiresIn')
    localStorage.removeItem('userId')
  }

  isLoggedIn(): boolean {
    return this.momentLib().isBefore(this.getExpiration())
  }

  getToken(): string {
    const token = localStorage.getItem('token') || ''
    return token
  }

  getUserId(): string {
    const id = localStorage.getItem('userId') || ''
    return id
  }

  getExpiration(): moment.MomentInput {
    const expiration = localStorage.getItem('expiresIn') || '0'
    const expiresAt = JSON.parse(expiration)
    return this.momentLib(expiresAt)
  }
}
