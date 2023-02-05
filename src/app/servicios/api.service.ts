import { Injectable } from '@angular/core';
import { Characters } from '../models/characters';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // public idCharacter: string = '5f8d3a7f-467b-97f3-062c-13acf203c006';
  private url = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true';

  constructor(private http: HttpClient) {}

  public getCharacters(): Observable<Characters> {
    return this.http.get<Characters>(this.url);
  }

  public getCharacterById(idCharacter: string): Observable<Characters> {
    return this.http.get<Characters>(`${this.url}/${idCharacter}`);
  }
}
