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
    id?: string,
  ): Observable<IGenericResponse<boolean>> {
    return this.http.get<IGenericResponse<boolean>>(
      `${this.url}/api/user/verify-exist-nickname/${nickname}/${id}`,
    )
  }

  getUserById(id: string): Observable<IGenericResponse<IUser>> {
    return this.http.get<IGenericResponse<IUser>>(`${this.url}/api/user/${id}`)
  }

  updateUser(user: IUser, id: string): Observable<IGenericResponse<IUser>> {
    return this.http.put<IGenericResponse<IUser>>(
      `${this.url}/api/user/${id}`,
      user,
    )
  }

  uploadImageProfile(
    id: string,
    file: FormData,
  ): Observable<IGenericResponse<IUser>> {
    return this.http.post<IGenericResponse<IUser>>(
      `${this.url}/api/upload/${id}`,
      file,
    )
  }

  getImageProfile(id: string): Observable<any> {
    return this.http.get(`${this.url}/api/upload/${id}`, {
      responseType: 'blob',
    })
  }
}
