import { Injectable } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IResultCharacters } from '../../types/characters.type'

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private url: string = environment.rickAndMortyApi
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<IResultCharacters> {
    return this.http.get<IResultCharacters>(this.url)
  }
}
