import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private apiUrl = 'https://swapi.dev/api/planets/';

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}