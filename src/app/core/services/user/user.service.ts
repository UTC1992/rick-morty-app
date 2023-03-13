import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { IUser } from '../../models/user.model'
import { map, Observable } from 'rxjs'
import { IGenericResponse } from '../../types/generic-response.type'
import { environment } from '../../../../environments/environment.development'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = environment.apiUrl
  constructor(private http: HttpClient) {}

  saveUser(user: IUser): Observable<IGenericResponse<IUser>> {
    return this.http.post<IGenericResponse<IUser>>(`${this.url}/api/user`, user)
  }

  verifyUniqueEmail(email: string): Observable<IGenericResponse<boolean>> {
    return this.http.get<IGenericResponse<boolean>>(
      `${this.url}/api/user/verify-exist-email/${email}`,
    )
  }

  verifyUniqueNickname(
    nickname: string,
  ): Observable<IGenericResponse<boolean>> {
    return this.http.get<IGenericResponse<boolean>>(
      `${this.url}/api/user/verify-exist-nickname/${nickname}`,
    )
  }
}
