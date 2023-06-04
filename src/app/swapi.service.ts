import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private apiUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  getPlanets(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/planets/?page=${id}`);
  }

  getPlanet(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/planets/${id}/`);
  }

  getResidents(id: number): Observable<any> {
    const planetData$ = this.getPlanet(id);

    return planetData$.pipe(
      switchMap((data: any) => {
        const residentsUrls = data.residents;
        const residentsRequests = residentsUrls.map((url: string) => this.http.get(url));
        return forkJoin(residentsRequests).pipe(
          map((residentsData: unknown) => {
            const residentsArray = residentsData as any[];
            data.residents = residentsArray;
            return data.residents;
          })
        );
      })
    );
  }
}