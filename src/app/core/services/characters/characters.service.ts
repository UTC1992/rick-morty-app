import { Injectable } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IResultCharacters } from '../../types/characters.type'
import { IGenericResponse } from '../../types/generic-response.type'
import { IRatingCharacter } from '../../types/rating-character.type'

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private url: string = environment.rickAndMortyApi
  private urlApi: string = environment.apiUrl

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<IResultCharacters> {
    return this.http.get<IResultCharacters>(this.url)
  }

  saveCharacter(
    character: IRatingCharacter,
  ): Observable<IGenericResponse<IRatingCharacter>> {
    return this.http.post<IGenericResponse<IRatingCharacter>>(
      `${this.urlApi}/api/character`,
      character,
    )
  }
}
