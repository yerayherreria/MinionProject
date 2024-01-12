import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinionsService {
  private url = 'http://localhost:3000/minions/';
  constructor(private httpClient: HttpClient) { }

  getMinions(): Observable<Minion[]> {
    return this.httpClient.get<Minion[]>(this.url);
  }

  addMinion(minion: Omit<PositionCallback,"id">){
    return this.httpClient.post<Minion>(this.url,minion);
  }
}
